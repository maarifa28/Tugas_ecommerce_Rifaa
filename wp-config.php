<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'storekuy' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'iClb!yx!^L6R.eo|@::^H|XRTjS<MnES_VoXFE)Sy:{zO}-ps.=d``Ug9%h8i}?:' );
define( 'SECURE_AUTH_KEY',  'HyL9RHn,g,-f&[wIG=@k^Iy2kRGdL-(Xi&3fgBnM,@J{(=pTxFz)H.BE,3)oiK;5' );
define( 'LOGGED_IN_KEY',    '$?uPV)QU&YwiXw[&{U<S90hSD:?I6*VJ[T`~;sG9p4L``m7}-+1*wn=ue~UCOZ-?' );
define( 'NONCE_KEY',        '1zkiS}U,*!hM60!06X&^SlD/hwqef7H33v`6`$qinO@KeP b,tYh2*y~dV2wSIlQ' );
define( 'AUTH_SALT',        'y5_1{|~ g=v)]:XdNRk#f8YA82STWymQYmmz4hI<0Gx.>.h^Lb-V N*arOaz6914' );
define( 'SECURE_AUTH_SALT', 'fJNt1tTy4=dc|nO>-k;GR[/}ybf1oex4;7}Y[37;v*21Tyckc0HKhnqyv^e1SZik' );
define( 'LOGGED_IN_SALT',   '56m  pZqfuPRuEcH.hLa^_YU-S8R7.~DGR0TJzq0yU;}H$ch}+(+%B4Wg5syeOFP' );
define( 'NONCE_SALT',       '~7^)ClM.71$p4Asi15lwlZk}!yf%JFCO9B]7|qJpgi8,.7c{6$u>&dDZ[U3fT,x<' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
