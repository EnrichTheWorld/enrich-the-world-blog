'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as styles from './styles.css';

const PhaserMarioGame = () => {
	const gameRef = useRef<HTMLDivElement>(null);
	const [gameInstance, setGameInstance] = useState<any>(null);
	const [score, setScore] = useState(0);
	const [lives, setLives] = useState(3);
	const [gameStarted, setGameStarted] = useState(false);

	useEffect(() => {
		let script: HTMLScriptElement | null = null;

		if (gameStarted && !gameInstance) {
			// Phaser CDN 로드
			script = document.createElement('script');
			script.src = 'https://cdn.jsdelivr.net/npm/phaser@3.70.0/dist/phaser.min.js';
			script.async = true;

			script.onload = () => {
				console.log('Phaser loaded successfully');
				if (gameRef.current && (window as any).Phaser) {
					setTimeout(() => initGame(), 100); // 약간의 지연 추가
				}
			};

			script.onerror = () => {
				console.error('Failed to load Phaser');
				// 폴백으로 간단한 Canvas 게임 생성
				createFallbackGame();
			};

			document.head.appendChild(script);
		}

		return () => {
			if (gameInstance) {
				gameInstance.destroy(true);
				setGameInstance(null);
			}
			if (script && script.parentNode) {
				script.parentNode.removeChild(script);
			}
		};
	}, [gameStarted]);

	const createFallbackGame = () => {
		// Phaser 로드 실패 시 간단한 Canvas 게임
		if (!gameRef.current) return;

		const canvas = document.createElement('canvas');
		canvas.width = 800;
		canvas.height = 600;
		canvas.style.border = '2px solid #333';
		canvas.style.backgroundColor = '#87CEEB';
		gameRef.current.appendChild(canvas);

		const ctx = canvas.getContext('2d')!;

		// 간단한 점프 게임
		const game = {
			player: { x: 100, y: 300, width: 30, height: 30, velocityY: 0, grounded: true },
			platforms: [
				{ x: 0, y: 350, width: 800, height: 50 },
				{ x: 200, y: 300, width: 150, height: 20 },
				{ x: 450, y: 30, width: 100, height: 20 },
			],
			keys: {} as Record<string, boolean>,
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			game.keys[e.code] = true;
			if (e.code === 'Space' && game.player.grounded) {
				game.player.velocityY = -15;
				game.player.grounded = false;
			}
		};

		const handleKeyUp = (e: KeyboardEvent) => {
			game.keys[e.code] = false;
		};

		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);

		const gameLoop = () => {
			// Clear
			ctx.fillStyle = '#87CEEB';
			ctx.fillRect(0, 0, 800, 600);

			// Update player
			if (game.keys['ArrowLeft']) game.player.x -= 5;
			if (game.keys['ArrowRight']) game.player.x += 5;

			game.player.velocityY += 0.8; // gravity
			game.player.y += game.player.velocityY;

			// Platform collision
			game.player.grounded = false;
			for (const platform of game.platforms) {
				if (
					game.player.x < platform.x + platform.width &&
					game.player.x + game.player.width > platform.x &&
					game.player.y < platform.y + platform.height &&
					game.player.y + game.player.height > platform.y &&
					game.player.velocityY > 0
				) {
					game.player.y = platform.y - game.player.height;
					game.player.velocityY = 0;
					game.player.grounded = true;
				}
			}

			// Draw platforms
			ctx.fillStyle = '#4ECDC4';
			game.platforms.forEach((platform) => {
				ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
			});

			// Draw player
			ctx.fillStyle = '#FF6B6B';
			ctx.fillRect(game.player.x, game.player.y, game.player.width, game.player.height);

			// Instructions
			ctx.fillStyle = '#000';
			ctx.font = '16px Arial';
			ctx.fillText('Use Arrow Keys to move, Space to jump', 10, 30);
			ctx.fillText('Phaser failed to load - showing fallback game', 10, 50);

			requestAnimationFrame(gameLoop);
		};

		gameLoop();
	};

	const initGame = () => {
		const Phaser = (window as any).Phaser;

		if (!Phaser) {
			console.error('Phaser not loaded');
			createFallbackGame();
			return;
		}

		console.log('Initializing Phaser game...');

		class GameScene extends Phaser.Scene {
			private player: any;
			private platforms: any;
			private coins: any;
			private enemies: any;
			private cursors: any;
			private score = 0;
			private lives = 3;
			private scoreText: any;
			private livesText: any;
			private gameWon = false;

			constructor() {
				super({ key: 'GameScene' });
			}

			preload() {
				console.log('Preload started');

				// 텍스처 생성을 더 안전하게
				try {
					this.createColorSprite('player', 32, 48, '#FF6B6B');
					this.createColorSprite('platform', 400, 32, '#4ECDC4');
					this.createColorSprite('coin', 16, 16, '#FFD93D');
					this.createColorSprite('enemy', 24, 24, '#A8E6CF');
					console.log('Sprites created successfully');
				} catch (error) {
					console.error('Error creating sprites:', error);
				}
			}

			createColorSprite(key: string, width: number, height: number, color: string) {
				try {
					const graphics = this.add.graphics();
					const colorHex = parseInt(color.replace('#', ''), 16);
					graphics.fillStyle(colorHex);
					graphics.fillRect(0, 0, width, height);
					graphics.generateTexture(key, width, height);
					graphics.destroy();
					console.log(`Created sprite: ${key}`);
				} catch (error) {
					console.error(`Error creating sprite ${key}:`, error);
				}
			}

			create() {
				console.log('Create started');

				try {
					// 플랫폼 그룹 생성
					this.platforms = this.physics.add.staticGroup();

					// 지면 생성
					this.platforms.create(200, 568, 'platform').setScale(1, 0.5);
					this.platforms.create(600, 568, 'platform').setScale(1, 0.5);
					this.platforms.create(50, 250, 'platform').setScale(0.3, 1);
					this.platforms.create(750, 220, 'platform').setScale(0.3, 1);

					// 플레이어 생성
					this.player = this.physics.add.sprite(100, 450, 'player');
					this.player.setBounce(0.2);
					this.player.setCollideWorldBounds(true);

					console.log('Player created');

					// 코인 그룹 생성
					this.coins = this.physics.add.group();

					const coinPositions = [
						{ x: 70, y: 200 },
						{ x: 400, y: 100 },
						{ x: 750, y: 100 },
					];

					coinPositions.forEach((pos) => {
						const coin = this.coins.create(pos.x, pos.y, 'coin');
						coin.setBounceY(0.5);
					});

					console.log('Coins created');

					// 적 그룹 생성
					this.enemies = this.physics.add.group();
					const enemy1 = this.enemies.create(300, 450, 'enemy');

					this.enemies.children.entries.forEach((enemy: any) => {
						enemy.setBounce(1);
						enemy.setCollideWorldBounds(true);
						enemy.setVelocity(100, 0);
					});

					// 충돌 감지
					this.physics.add.collider(this.player, this.platforms);
					this.physics.add.collider(this.coins, this.platforms);
					this.physics.add.collider(this.enemies, this.platforms);

					// 코인 수집
					this.physics.add.overlap(this.player, this.coins, this.collectCoin, undefined, this);

					// 적과 충돌
					this.physics.add.overlap(this.player, this.enemies, this.hitEnemy, undefined, this);

					// 컨트롤 설정
					this.cursors = this.input.keyboard?.createCursorKeys();

					// UI 텍스트
					this.scoreText = this.add.text(16, 16, 'Score: 0', {
						fontSize: '32px',
						color: '#000',
					});

					this.livesText = this.add.text(16, 50, 'Lives: 3', {
						fontSize: '32px',
						color: '#000',
					});

					console.log('Game setup complete');
				} catch (error) {
					console.error('Error in create:', error);
				}
			}

			update() {
				if (!this.cursors || this.gameWon) return;

				// 플레이어 이동
				if (this.cursors.left?.isDown) {
					this.player.setVelocityX(-160);
					this.player.setTint(0x6b8eff); // 파란색으로 변경
					this.player.anims.play('left', true);
				} else if (this.cursors.right?.isDown) {
					this.player.setVelocityX(160);
					this.player.setTint(0x6bff6b); // 초록색으로 변경
					this.player.anims.play('right', true);
				} else {
					this.player.setVelocityX(0);
					this.player.setTint(0xff6b6b); // 원래 색으로
					this.player.anims.play('turn');
				}

				// 점프
				if (this.cursors.up?.isDown && this.player.body.touching.down) {
					this.player.setVelocityY(-330);
				}

				// 적 이동 패턴
				this.enemies.children.entries.forEach((enemy: any) => {
					if (enemy.body.velocity.x === 0) {
						enemy.setVelocityX(Phaser.Math.Between(-100, 100));
					}
				});
			}

			collectCoin(player: any, coin: any) {
				coin.disableBody(true, true);
				this.score += 10;
				this.scoreText.setText('Score: ' + this.score);

				// 코인 수집 이펙트
				const particles = this.add.particles(coin.x, coin.y, 'coin', {
					speed: { min: 50, max: 100 },
					scale: { start: 0.5, end: 0 },
					lifespan: 300,
					quantity: 5,
				});

				this.time.delayedCall(300, () => particles.destroy());

				// 모든 코인 수집 시
				if (this.coins.countActive(true) === 0) {
					this.gameWon = true;
					this.add
						.text(400, 300, 'YOU WIN!', {
							fontSize: '64px',
							color: '#00FF00',
						})
						.setOrigin(0.5);

					this.time.delayedCall(2000, () => {
						this.scene.restart();
						this.gameWon = false;
						this.score = 0;
						this.lives = 3;
					});
				}
			}

			hitEnemy(player: any, enemy: any) {
				this.lives -= 1;
				this.livesText.setText('Lives: ' + this.lives);

				// 플레이어 깜빡임 효과
				this.tweens.add({
					targets: player,
					alpha: 0.5,
					duration: 100,
					yoyo: true,
					repeat: 5,
				});

				// 플레이어를 시작 위치로 이동
				player.setPosition(100, 450);
				player.setVelocity(0, 0);

				if (this.lives <= 0) {
					this.add
						.text(400, 300, 'GAME OVER', {
							fontSize: '64px',
							color: '#FF0000',
						})
						.setOrigin(0.5);

					this.time.delayedCall(2000, () => {
						this.scene.restart();
						this.score = 0;
						this.lives = 3;
					});
				}
			}

			checkWinCondition() {
				// 외부 React 컴포넌트로 상태 전달
				if ((window as any).updateGameStats) {
					(window as any).updateGameStats(this.score, this.lives);
				}
			}
		}

		const config = {
			type: Phaser.AUTO,
			width: 800,
			height: 600,
			parent: gameRef.current,
			backgroundColor: '#87CEEB',
			physics: {
				default: 'arcade',
				arcade: {
					gravity: { y: 300 },
					debug: false,
				},
			},
			scene: GameScene,
			callbacks: {
				postBoot: () => {
					console.log('Phaser game booted successfully');
				},
			},
		};

		try {
			const game = new Phaser.Game(config);
			setGameInstance(game);
			console.log('Game instance created');
		} catch (error) {
			console.error('Error creating Phaser game:', error);
			createFallbackGame();
		}

		// React와 Phaser 간 통신
		(window as any).updateGameStats = (newScore: number, newLives: number) => {
			setScore(newScore);
			setLives(newLives);
		};
	};

	const startGame = () => {
		setGameStarted(true);
	};

	const resetGame = () => {
		if (gameInstance) {
			gameInstance.scene.getScene('GameScene').scene.restart();
		}
	};

	return (
		<div className={styles.gameContainer}>
			<div className={styles.gameHeader}>
				<h2 className={styles.gameTitle}>🍄 Super Mario Style Game</h2>
				<p className={styles.gameDescription}>Use arrow keys to move and jump. Collect all yellow coins to win!</p>

				{!gameStarted ? (
					<button onClick={startGame} className={styles.startButton}>
						🎮 Start Game
					</button>
				) : (
					<div className={styles.gameControls}>
						<div className={styles.scoreCard}>
							<span className={styles.statText}>Score: {score}</span>
						</div>
						<div className={styles.livesCard}>
							<span className={styles.statText}>Lives: {lives}</span>
						</div>
						<button onClick={resetGame} className={styles.resetButton}>
							🔄 Reset
						</button>
					</div>
				)}
			</div>

			{gameStarted && (
				<div className={styles.gameCanvasWrapper}>
					<div className={styles.gameCanvas}>
						<div ref={gameRef}></div>
					</div>
				</div>
			)}

			{gameStarted && (
				<div className={styles.controlsInfo}>
					<div className={styles.controlsCard}>
						<h3 className={styles.controlsTitle}>게임 조작법</h3>
						<div className={styles.controlsGrid}>
							<div className={styles.controlItem}>
								<span className={styles.keyBadge}>←→</span>
								<span className={styles.controlLabel}>좌우 이동</span>
							</div>
							<div className={styles.controlItem}>
								<span className={styles.keyBadge}>↑</span>
								<span className={styles.controlLabel}>점프</span>
							</div>
							<div className={styles.controlItem}>
								<span className={styles.keyBadge}>🪙</span>
								<span className={styles.controlLabel}>코인 수집</span>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className={styles.gameFooter}>
				<p>이 게임은 Phaser.js를 사용하여 제작되었습니다.</p>
				<p>실제 프로젝트에서는 더 정교한 그래픽과 사운드를 추가할 수 있습니다.</p>
			</div>
		</div>
	);
};

export default PhaserMarioGame;
