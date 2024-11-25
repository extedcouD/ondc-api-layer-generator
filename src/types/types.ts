export interface CodeConfig {
	_NAME_: string;
	_RETURN_: string;
	_SCOPE_?: string;
	_ERROR_CODE_?: number;
	_CONTINUE_?: string;
	[key: string]: string | string[] | number | undefined;
}
