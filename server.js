const express = require("express");
const morgan = require('morgan');
const path = require('path');
const detectPort = require('detect-port').default;

const DEFAULT_PORT = process.env.PORT || 3000;

detectPort(DEFAULT_PORT)
    .then( availablePort => {
        if (availablePort !== DEFAULT_PORT) {
            console.warn(`Port ${DEFAULT_PORT} is not available. Trying port ${availablePort}...`);
        }

        const app = express();

        // Morgan will keep tabs in the console of server requests
        app.use(morgan('dev'));

        // Seting up public folder 
        app.use(express.static(path.join(__dirname, 'public')));

        app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

        /* Start engines */
        app.listen(availablePort, () => {
            
            console.log(`🚀 Server is now listening on port ${availablePort}`);

            import('open')
                .then((open) => {
                    open.default(`http://localhost:${availablePort}`);
                }).catch((err) => {
                    console.error("Failed to open browser:", err);
                });
        
        });

        // Handle 404 errors
        app.use((req, res, next) => {
            res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
        });

        // Handle 500 errors
        app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).sendFile(path.join(__dirname, 'public', '500.html'));
        });

        // Handle uncaught exceptions
        process.on('uncaughtException', (err) => {
            console.error('Uncaught Exception:', err);
            // Optionally, you can log the error to a file or monitoring service
        });

        // Handle unhandled promise rejections
        process.on('unhandledRejection', (reason, promise) => {
            console.error('Unhandled Rejection at:', promise, 'reason:', reason);
            // Optionally, you can log the error to a file or monitoring service
        });
    
    }
    
    ).catch(err => {
        console.error('Error detecting port:', err);
    });

