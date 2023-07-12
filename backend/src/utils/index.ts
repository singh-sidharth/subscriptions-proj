import crypto from "crypto";

const SECRET = "SID-REST-API";

export const random = (): string => crypto.randomBytes(128).toString("base64");

export const authentication = (salt: string, password: string) => {
	return crypto
		.createHmac("sha256", [salt, password].join("/"))
		.update(SECRET)
		.digest("hex");
};
