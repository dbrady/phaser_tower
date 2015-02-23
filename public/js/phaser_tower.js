$(function() {
    // tile board 19 wide by 25 tall, * 32px = 608x800.
    var game = new Phaser.Game(608, 800, Phaser.AUTO, 'theGame', { preload: preload, create: create, update: update });
    var tiles;
    var score = 0;
    var scoreText;

    var map = [
        "##########E########",
        "#..PPPPPPPP.......#",
        "#..P..............#",
        "#..PPPPPPPPPPPPP..#",
        "#..............P..#",
        "#..PPPPPPPPPPPPP..#",
        "#..P..............#",
        "#..PPPPPPPPPPPP...#",
        "#.............P...#",
        "#.............P...#",
        "#.............P...#",
        "#.PPPPPPPPPPPPP...#",
        "#.P...............#",
        "#.P...PPPPPPPPPPP.#",
        "#.P...P.........P.#",
        "#.P...P.........P.#",
        "#.P...P.........P.#",
        "#.P...PPPPPPPPP.P.#",
        "#.P...........P.P.#",
        "#.P...........P.P.#",
        "#.PPPPPPPPPPPPP.P.#",
        "#...............P.#",
        "#...............P.#",
        "#.PPPPPPPPPPPPPPP.#",
        "##X################"
    ];

    function preload() {
        game.load.image('wall', 'assets/wall.png');
        game.load.image('entry', 'assets/path.png');
        game.load.image('exit', 'assets/path.png');
        game.load.image('ground', 'assets/ground.png');
        game.load.image('path', 'assets/path.png');
        game.load.image('mob1', 'assets/mob1.png');
        game.load.image('tower_gun', 'assets/tower_gun.png')
    }

    function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        tiles = game.add.group();
        tiles.enableBody = true;
        var tile;

        for (var y=0; y<25; ++y) {
            for (var x=0; x<19; ++x) {
                var sprite='ground';
                switch(map[y][x]) {
                    case '#': sprite = 'wall'; break;
                    case 'P':
                    case 'E':
                    case 'X': sprite = 'path'; break;
                }
                tile = tiles.create(x*32, y*32, sprite);
                tile.body.immovable = true;
            }
        }
        // load the background/path
        // game.add.sprite(0, 0, 'sky');

        //
        //platforms = game.add.group();
        //platforms.enableBody = true;
        //
        //var ground = platforms.create(0, game.world.height - 64, 'ground');
        //ground.scale.setTo(2, 2);
        //ground.body.immovable = true;
        //
        //var ledge = platforms.create(400, 400, 'ground');
        //ledge.body.immovable = true;
        //
        //ledge = platforms.create(-150, 250, 'ground');
        //ledge.body.immovable = true;
        //
        //// READY PLAYER ONE
        //player = game.add.sprite(32, game.world.height - 150, 'dude');
        //game.physics.arcade.enable(player);
        //
        //player.body.bounce.y = 0.2;
        //player.body.gravity.y = 300;
        //player.body.collideWorldBounds = true;
        //
        //player.animations.add('left', [0, 1, 2, 3], 10, true);
        //player.animations.add('right', [5, 6, 7, 8], 10, true);
        //
        //scoreText = game.add.text(16, 16, 'score: 0', { fontSize: 32, fill: '#000'});
        //
        //cursors = game.input.keyboard.createCursorKeys();
        //
        //// OH GET IIIIT
        //stars =  game.add.group();
        //
        //stars.enableBody = true;
        //
        //for (var i=0; i<12; ++i) {
        //    var star = stars.create(i*70, 0, 'star');
        //    star.body.gravity.y = 6;
        //    star.body.bounce.y = 0.7 + Math.random() * 0.2;
        //}
    }

    function update() {
        //game.physics.arcade.collide(player, platforms);
        //game.physics.arcade.collide(stars, platforms);
        //game.physics.arcade.overlap(player, stars, collectStar, null, this);
        //
        //player.body.velocity.x = 0;
        //
        //if (cursors.left.isDown) {
        //    player.body.velocity.x = -150;
        //    player.animations.play('left');
        //} else if (cursors.right.isDown) {
        //    player.body.velocity.x = 150;
        //    player.animations.play('right');
        //} else {
        //    player.animations.stop();
        //    player.frame = 4;
        //}
        //
        //if (cursors.up.isDown && player.body.touching.down) {
        //    player.body.velocity.y = -350;
        //}

    }

    console.log("phaser_tower loaded.");
});
