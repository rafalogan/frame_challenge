import express, { Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { onLog } from 'src/utils';

export class AppConfig {
	private _express: Application;

	constructor(private enviroment: string) {
		this._express = express();
	}

	get express(): Application {
		return this._express;
	}

	exec() {
		this.configExpress();
		this.initModules();
	}

	private configExpress() {
		this.express.use(morgan(this.enviroment !== 'production' ? 'dev' : 'combined'));
		this.express.use(bodyParser.urlencoded({ extended: false }));
		this.express.use(bodyParser.json());
	}

	private initModules() {
		onLog('insert Modules:');
	}
}
