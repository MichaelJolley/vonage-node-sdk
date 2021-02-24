
/* general */
export interface CredentialsObject {
	apiKey: string;
	apiSecret: string;
	applicationId?: string;
	privateKey?: string;
}

export default class Vonage {
	credentials: CredentialsObject;
	options: { [key: string]: any };

	constructor(credentials: CredentialsObject, options: { [key: string]: any }): void;
}
