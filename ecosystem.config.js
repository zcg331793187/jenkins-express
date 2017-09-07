module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [

        // First application
        {
            name: "API",
            script: "./bin/www",
            env: {
                COMMON_VARIABLE: "true"
            },
            env_production: {
                NODE_ENV: "production"
            }
        }
    ],

    /**
     * Deployment section
     * http://pm2.keymetrics.io/docs/usage/deployment/
     */
    deploy: {
        production: {
            user: "root",
            host: "119.29.38.39",
            ref: "origin/master",
            repo: "git@github.com:zcg331793187/jenkins-express.git",
            path: "/data/www/production",
            "post-deploy": "npm install && pm2 startOrRestart ecosystem.json --env production"
        }
    }
}
