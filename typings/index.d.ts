
/* general */
export interface CredentialsObject {
	apiKey: string;
	apiSecret: string;
	applicationId?: string;
	privateKey?: string;
}

export interface VonageInstance {
	credentials: CredentialsObject;
	options: { [key: string]: any };

	constructor(credentials: CredentialsObject, options: { [key: string]: any }): void;
}

declare const Vonage: VonageInstance;
export default Vonage;
