/// <reference path="./_helpers.d.ts" />
declare module com {
	export module tencent {
		export module a {
			export module a {
				export module a {
					export module a {
						export class a {
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.tencent.a.a.a.a.c.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module a {
			export module a {
				export module a {
					export module a {
						export class b extends com.tencent.a.a.a.a.f {
							public a(param0: com.tencent.a.a.a.a.c): void;
							public a(param0: string): void;
							public b(): string;
							public a(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module a {
			export module a {
				export module a {
					export module a {
						export class c {
							public constructor();
							public toString(): string;
							public a(): string;
						}
					}
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.a.a.a.a.c.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module a {
			export module a {
				export module a {
					export module a {
						export class d extends com.tencent.a.a.a.a.f {
							public constructor(param0: androidcontentContext);
							public a(param0: com.tencent.a.a.a.a.c): void;
							public a(param0: string): void;
							public b(): string;
							public a(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.a.a.a.a.c.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module a {
			export module a {
				export module a {
					export module a {
						export class e extends com.tencent.a.a.a.a.f {
							public constructor(param0: androidcontentContext);
							public a(param0: com.tencent.a.a.a.a.c): void;
							public a(param0: string): void;
							public b(): string;
							public a(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.a.a.a.a.c.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module a {
			export module a {
				export module a {
					export module a {
						export abstract class f {
							public constructor(param0: androidcontentContext);
							public o(): com.tencent.a.a.a.a.c;
							public a(param0: com.tencent.a.a.a.a.c): void;
							public a(param0: string): void;
							public b(): string;
							public a(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.a.a.a.a.c.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module a {
			export module a {
				export module a {
					export module a {
						export class g {
							public p(): com.tencent.a.a.a.a.c;
							public a(param0: string): void;
							public static C(param0: androidcontentContext): com.tencent.a.a.a.a.g;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module a {
			export module a {
				export module a {
					export module a {
						export class h {
							public static c(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

import androidosBundle = android.os.Bundle;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module channel {
					export class MMessageActV2 {
						public static DEFAULT_ENTRY_CLASS_NAME: string;
						public static MM_ENTRY_PACKAGE_NAME: string;
						public static MM_MSG_ENTRY_CLASS_NAME: string;
						public constructor();
						public static send(param0: androidcontentContext, param1: com.tencent.mm.opensdk.channel.MMessageActV2.Args): boolean;
					}
					export module MMessageActV2 {
						export class Args {
							public static INVALID_FLAGS: number;
							public targetPkgName: string;
							public targetClassName: string;
							public content: string;
							public token: string;
							public flags: number;
							public bundle: androidosBundle;
							public constructor();
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module channel {
					export module a {
						export class a {
							public static a(param0: androidcontentContext, param1: com.tencent.mm.opensdk.channel.a.a.a): boolean;
						}
						export module a {
							export class a {
								public W: string;
								public action: string;
								public content: string;
								public X: number;
								public bundle: androidosBundle;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module channel {
					export module a {
						export class b {
							public static a(param0: string, param1: number, param2: string): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module constants {
					export class Build {
						public static SDK_INT: number;
						public static SDK_VERSION_NAME: string;
						public static MIN_SDK_INT: number;
						public static CHECK_TOKEN_SDK_INT: number;
						public static TIMELINE_SUPPORTED_SDK_INT: number;
						public static EMOJI_SUPPORTED_SDK_INT: number;
						public static MUSIC_DATA_URL_SUPPORTED_SDK_INT: number;
						public static PAY_SUPPORTED_SDK_INT: number;
						public static OPENID_SUPPORTED_SDK_INT: number;
						public static FAVORITE_SUPPPORTED_SDK_INT: number;
						public static MESSAGE_ACTION_SUPPPORTED_SDK_INT: number;
						public static SCAN_QRCODE_AUTH_SUPPORTED_SDK_INT: number;
						public static MINIPROGRAM_SUPPORTED_SDK_INT: number;
						public static VIDEO_FILE_SUPPORTED_SDK_INT: number;
						public static SUBSCRIBE_MESSAGE_SUPPORTED_SDK_INT: number;
						public static LAUNCH_MINIPROGRAM_SUPPORTED_SDK_INT: number;
						public static CHOOSE_INVOICE_TILE_SUPPORT_SDK_INT: number;
						public static INVOICE_AUTH_INSERT_SDK_INT: number;
						public static NON_TAX_PAY_SDK_INT: number;
						public static PAY_INSURANCE_SDK_INT: number;
						public static SUBSCRIBE_MINI_PROGRAM_MSG_SUPPORTED_SDK_INT: number;
						public static OFFLINE_PAY_SDK_INT: number;
						public static SEND_TO_SPECIFIED_CONTACT_SDK_INT: number;
						public static OPEN_BUSINESS_WEBVIEW_SDK_INT: number;
						public static SEND_25M_IMAGE_SDK_INT: number;
						public static OPEN_BUSINESS_VIEW_SDK_INT: number;
						public static SEND_BUSINESS_CARD_SDK_INT: number;
						public static WEISHI_MINIPROGRAM_SUPPORTED_SDK_INT: number;
						public static getMinorVersion(): number;
						public static getMajorVersion(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module constants {
					export class ConstantsAPI {
						/**
						 * Constructs a new instance of the com.tencent.mm.opensdk.constants.ConstantsAPI interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
						public static COMMAND_SENDMESSAGE_TO_WX: number;
						public static COMMAND_HANDLE_SCAN_RESULT: number;
						public static COMMAND_JUMP_TO_BIZ_PROFILE: number;
						public static COMMAND_CHOOSE_CARD_FROM_EX_CARD_PACKAGE: number;
						public static COMMAND_JUMP_TO_OFFLINE_PAY: number;
						public static CHECK_SUM: string;
						public static COMMAND_ADD_CARD_TO_EX_CARD_PACKAGE: number;
						public static COMMAND_JOIN_CHATROOM: number;
						public static COMMAND_LAUNCH_WX_MINIPROGRAM: number;
						public static COMMAND_INVOICE_AUTH_INSERT: number;
						public static ACTION_REFRESH_WXAPP: string;
						public static COMMAND_JUMP_BIZ_TEMPSESSION: number;
						public static COMMAND_OPEN_RANK_LIST: number;
						public static COMMAND_SUBSCRIBE_MINI_PROGRAM_MSG: number;
						public static COMMAND_OPEN_BUSI_LUCKY_MONEY: number;
						public static COMMAND_GETMESSAGE_FROM_WX: number;
						public static COMMAND_PAY_BY_WX: number;
						public static COMMAND_PAY_INSURANCE: number;
						public static SDK_VERSION: string;
						public static APP_SUPORT_CONTENT_TYPE: string;
						public static ACTION_HANDLE_APP_REGISTER: string;
						public static COMMAND_UNKNOWN: number;
						public static COMMAND_OPEN_BUSINESS_WEBVIEW: number;
						public static CONTENT: string;
						public static COMMAND_OPEN_WEBVIEW: number;
						public static TOKEN: string;
						public static COMMAND_SUBSCRIBE_MESSAGE: number;
						public static COMMAND_LAUNCH_BY_WX: number;
						public static COMMAND_CREATE_CHATROOM: number;
						public static ACTION_HANDLE_APP_UNREGISTER: string;
						public static COMMAND_NON_TAX_PAY: number;
						public static COMMAND_SENDAUTH: number;
						public static COMMAND_JUMP_BIZ_WEBVIEW: number;
						public static APP_PACKAGE: string;
						public static COMMAND_SHOWMESSAGE_FROM_WX: number;
						public static COMMAND_OPEN_BUSINESS_VIEW: number;
					}
					export module ConstantsAPI {
						export class AppSupportContentFlag {
							public static MMAPP_SUPPORT_TEXT: number;
							public static MMAPP_SUPPORT_PICTURE: number;
							public static MMAPP_SUPPORT_LOCATION: number;
							public static MMAPP_SUPPORT_VIDEO: number;
							public static MMAPP_SUPPORT_AUDIO: number;
							public static MMAPP_SUPPORT_WEBPAGE: number;
							public static MMAPP_SUPPORT_DOC: number;
							public static MMAPP_SUPPORT_DOCX: number;
							public static MMAPP_SUPPORT_PPT: number;
							public static MMAPP_SUPPORT_PPTX: number;
							public static MMAPP_SUPPORT_XLS: number;
							public static MMAPP_SUPPORT_XLSX: number;
							public static MMAPP_SUPPORT_PDF: number;
							public constructor();
						}
						export class OpenWebviewType {
							/**
							 * Constructs a new instance of the com.tencent.mm.opensdk.constants.ConstantsAPI$OpenWebviewType interface with the provided implementation.
							 */
							public constructor(implementation: {
							});
							public static TYPE_NONTAX_PAY: number;
							public static TYPE_PAYINSURANCE: number;
							public static TYPE_SUBSCRIBE_MINI_PROGRAM_MSG: number;
							public static TYPE_SUBSCRIBE_MESSAGE: number;
							public static TYPE_INVOICE_AUTH_INSERT: number;
						}
						export class Token {
							public static WX_TOKEN_KEY: string;
							public static WX_TOKEN_VALUE_MSG: string;
							public static WX_TOKEN_PLATFORMID_KEY: string;
							public static WX_TOKEN_PLATFORMID_VALUE: string;
							public static WX_LAUNCH_PARAM_KEY: string;
							public constructor();
						}
						export class WXApp {
							public static WXAPP_PACKAGE_NAME: string;
							public static WXAPP_BROADCAST_PERMISSION: string;
							public static WXAPP_MSG_ENTRY_CLASSNAME: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.tencent.mm.opensdk.diffdev.IDiffDevOAuth.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module diffdev {
					export class DiffDevOAuthFactory {
						public static VERSION_1: number;
						public static MAX_SUPPORTED_VERSION: number;
						public static getDiffDevOAuth(param0: number): com.tencent.mm.opensdk.diffdev.IDiffDevOAuth;
						public static getDiffDevOAuth(): com.tencent.mm.opensdk.diffdev.IDiffDevOAuth;
					}
				}
			}
		}
	}
}

/// <reference path="./com.tencent.mm.opensdk.diffdev.OAuthListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module diffdev {
					export class IDiffDevOAuth {
						/**
						 * Constructs a new instance of the com.tencent.mm.opensdk.diffdev.IDiffDevOAuth interface with the provided implementation.
						 */
						public constructor(implementation: {
							auth(param0: string, param1: string, param2: string, param3: string, param4: string, param5: com.tencent.mm.opensdk.diffdev.OAuthListener): boolean;
							stopAuth(): boolean;
							addListener(param0: com.tencent.mm.opensdk.diffdev.OAuthListener): void;
							removeListener(param0: com.tencent.mm.opensdk.diffdev.OAuthListener): void;
							removeAllListeners(): void;
							detach(): void;
						});
						public stopAuth(): boolean;
						public removeListener(param0: com.tencent.mm.opensdk.diffdev.OAuthListener): void;
						public removeAllListeners(): void;
						public addListener(param0: com.tencent.mm.opensdk.diffdev.OAuthListener): void;
						public detach(): void;
						public auth(param0: string, param1: string, param2: string, param3: string, param4: string, param5: com.tencent.mm.opensdk.diffdev.OAuthListener): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module diffdev {
					export class OAuthErrCode {
						public static WechatAuth_Err_OK: com.tencent.mm.opensdk.diffdev.OAuthErrCode;
						public static WechatAuth_Err_NormalErr: com.tencent.mm.opensdk.diffdev.OAuthErrCode;
						public static WechatAuth_Err_NetworkErr: com.tencent.mm.opensdk.diffdev.OAuthErrCode;
						public static WechatAuth_Err_JsonDecodeErr: com.tencent.mm.opensdk.diffdev.OAuthErrCode;
						public static WechatAuth_Err_Cancel: com.tencent.mm.opensdk.diffdev.OAuthErrCode;
						public static WechatAuth_Err_Timeout: com.tencent.mm.opensdk.diffdev.OAuthErrCode;
						public static WechatAuth_Err_Auth_Stopped: com.tencent.mm.opensdk.diffdev.OAuthErrCode;
						public static values(): native.Array<com.tencent.mm.opensdk.diffdev.OAuthErrCode>;
						public getCode(): number;
						public static valueOf(param0: string): com.tencent.mm.opensdk.diffdev.OAuthErrCode;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.tencent.mm.opensdk.diffdev.OAuthErrCode.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module diffdev {
					export class OAuthListener {
						/**
						 * Constructs a new instance of the com.tencent.mm.opensdk.diffdev.OAuthListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onAuthGotQrcode(param0: string, param1: native.Array<number>): void;
							onQrcodeScanned(): void;
							onAuthFinish(param0: com.tencent.mm.opensdk.diffdev.OAuthErrCode, param1: string): void;
						});
						public onQrcodeScanned(): void;
						public onAuthGotQrcode(param0: string, param1: native.Array<number>): void;
						public onAuthFinish(param0: com.tencent.mm.opensdk.diffdev.OAuthErrCode, param1: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.tencent.mm.opensdk.diffdev.OAuthListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module diffdev {
					export module a {
						export class a {
							public constructor();
							public removeAllListeners(): void;
							public detach(): void;
							public auth(param0: string, param1: string, param2: string, param3: string, param4: string, param5: com.tencent.mm.opensdk.diffdev.OAuthListener): boolean;
							public stopAuth(): boolean;
							public addListener(param0: com.tencent.mm.opensdk.diffdev.OAuthListener): void;
							public removeListener(param0: com.tencent.mm.opensdk.diffdev.OAuthListener): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.tencent.mm.opensdk.diffdev.OAuthErrCode.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module diffdev {
					export module a {
						export class b {
							public onQrcodeScanned(): void;
							public onAuthFinish(param0: com.tencent.mm.opensdk.diffdev.OAuthErrCode, param1: string): void;
							public onAuthGotQrcode(param0: string, param1: native.Array<number>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module diffdev {
					export module a {
						export class c {
							public run(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.tencent.mm.opensdk.diffdev.OAuthErrCode.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.diffdev.OAuthListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module diffdev {
					export module a {
						export class d {
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: com.tencent.mm.opensdk.diffdev.OAuthListener);
							public q(): boolean;
						}
						export module d {
							export class a {
								public aj: com.tencent.mm.opensdk.diffdev.OAuthErrCode;
								public ak: string;
								public al: string;
								public am: string;
								public an: number;
								public ao: string;
								public ap: native.Array<number>;
								public static c(param0: native.Array<number>): com.tencent.mm.opensdk.diffdev.a.d.a;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module diffdev {
					export module a {
						export class e {
							public static h(param0: string): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.tencent.mm.opensdk.diffdev.OAuthErrCode.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.diffdev.OAuthListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module diffdev {
					export module a {
						export class f {
							public constructor(param0: string, param1: com.tencent.mm.opensdk.diffdev.OAuthListener);
						}
						export module f {
							export class a {
								public aj: com.tencent.mm.opensdk.diffdev.OAuthErrCode;
								public ar: string;
								public as: number;
								public static d(param0: native.Array<number>): com.tencent.mm.opensdk.diffdev.a.f.a;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module diffdev {
					export module a {
						export class g {
							public static at: com.tencent.mm.opensdk.diffdev.a.g;
							public static au: com.tencent.mm.opensdk.diffdev.a.g;
							public static av: com.tencent.mm.opensdk.diffdev.a.g;
							public static aw: com.tencent.mm.opensdk.diffdev.a.g;
							public static ax: com.tencent.mm.opensdk.diffdev.a.g;
							public static ay: com.tencent.mm.opensdk.diffdev.a.g;
							public static values(): native.Array<com.tencent.mm.opensdk.diffdev.a.g>;
							public static valueOf(param0: string): com.tencent.mm.opensdk.diffdev.a.g;
							public toString(): string;
							public getCode(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbase {
					export abstract class BaseReq {
						public transaction: string;
						public openId: string;
						public constructor();
						public getType(): number;
						public fromBundle(param0: androidosBundle): void;
						public toBundle(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbase {
					export abstract class BaseResp {
						public errCode: number;
						public errStr: string;
						public transaction: string;
						public openId: string;
						public constructor();
						public getType(): number;
						public fromBundle(param0: androidosBundle): void;
						public toBundle(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
					export module BaseResp {
						export class ErrCode {
							/**
							 * Constructs a new instance of the com.tencent.mm.opensdk.modelbase.BaseResp$ErrCode interface with the provided implementation.
							 */
							public constructor(implementation: {
							});
							public static ERR_OK: number;
							public static ERR_BAN: number;
							public static ERR_COMM: number;
							public static ERR_SENT_FAILED: number;
							public static ERR_UNSUPPORT: number;
							public static ERR_AUTH_DENIED: number;
							public static ERR_USER_CANCEL: number;
						}
					}
				}
			}
		}
	}
}

import javautilList = java.util.List;
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class AddCardToWXCardPackage {
						public constructor();
					}
					export module AddCardToWXCardPackage {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public cardArrary: javautilList;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public cardArrary: javautilList;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class WXCardItem {
							public cardId: string;
							public cardExtMsg: string;
							public cardState: number;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class ChooseCardFromWXCardPackage {
						public constructor();
					}
					export module ChooseCardFromWXCardPackage {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public appId: string;
							public locationId: string;
							public signType: string;
							public cardSign: string;
							public timeStamp: string;
							public nonceStr: string;
							public cardId: string;
							public cardType: string;
							public canMultiSelect: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public cardItemList: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class CreateChatroom {
					}
					export module CreateChatroom {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public groupId: string;
							public chatroomName: string;
							public chatroomNickName: string;
							public extMsg: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public extMsg: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class HandleScanResult {
						public constructor();
					}
					export module HandleScanResult {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public scanResult: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class JoinChatroom {
					}
					export module JoinChatroom {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public groupId: string;
							public chatroomNickName: string;
							public extMsg: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public extMsg: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class JumpToBizProfile {
						public static JUMP_TO_NORMAL_BIZ_PROFILE: number;
						public static JUMP_TO_HARD_WARE_BIZ_PROFILE: number;
						public constructor();
					}
					export module JumpToBizProfile {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public toUserName: string;
							public extMsg: string;
							public profileType: number;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class JumpToBizTempSession {
						public static SHOW_MENU: number;
						public static SHOW_CHAT: number;
						public constructor();
					}
					export module JumpToBizTempSession {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public toUserName: string;
							public sessionFrom: string;
							public showType: number;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class JumpToBizWebview {
						public constructor();
					}
					export module JumpToBizWebview {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public toUserName: string;
							public extMsg: string;
							public webType: number;
							public scene: number;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class OpenBusiLuckyMoney {
						public constructor();
					}
					export module OpenBusiLuckyMoney {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public appId: string;
							public timeStamp: string;
							public nonceStr: string;
							public packageExt: string;
							public signType: string;
							public signature: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class OpenRankList {
						public constructor();
					}
					export module OpenRankList {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public constructor();
							public getType(): number;
							public checkArgs(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class OpenWebview {
						public constructor();
					}
					export module OpenWebview {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public url: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public result: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class SubscribeMessage {
					}
					export module SubscribeMessage {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public scene: number;
							public templateID: string;
							public reserved: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public templateID: string;
							public scene: number;
							public action: string;
							public reserved: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class SubscribeMiniProgramMsg {
					}
					export module SubscribeMiniProgramMsg {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public miniProgramAppId: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public unionId: string;
							public nickname: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class WXInvoiceAuthInsert {
						public constructor();
					}
					export module WXInvoiceAuthInsert {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public url: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public wxOrderId: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class WXLaunchMiniProgram {
						public constructor();
					}
					export module WXLaunchMiniProgram {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public static MINIPTOGRAM_TYPE_RELEASE: number;
							public static MINIPROGRAM_TYPE_TEST: number;
							public static MINIPROGRAM_TYPE_PREVIEW: number;
							public userName: string;
							public path: string;
							public miniprogramType: number;
							public extData: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public extMsg: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class WXNontaxPay {
						public constructor();
					}
					export module WXNontaxPay {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public url: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public wxOrderId: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class WXOpenBusinessView {
						public constructor();
					}
					export module WXOpenBusinessView {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public businessType: string;
							public query: string;
							public extInfo: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public extMsg: string;
							public businessType: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

import javautilHashMap = java.util.HashMap;
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class WXOpenBusinessWebview {
						public constructor();
					}
					export module WXOpenBusinessWebview {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public queryInfo: javautilHashMap;
							public businessType: number;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public resultInfo: string;
							public businessType: number;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelbiz {
					export class WXPayInsurance {
						public constructor();
					}
					export module WXPayInsurance {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public url: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public wxOrderId: string;
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.modelmsg.WXMediaMessage.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class GetMessageFromWX {
					}
					export module GetMessageFromWX {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public username: string;
							public lang: string;
							public country: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public message: com.tencent.mm.opensdk.modelmsg.WXMediaMessage;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class LaunchFromWX {
					}
					export module LaunchFromWX {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public messageAction: string;
							public messageExt: string;
							public lang: string;
							public country: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public checkArgs(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class SendAuth {
					}
					export module SendAuth {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public scope: string;
							public state: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public code: string;
							public state: string;
							public url: string;
							public lang: string;
							public country: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.modelmsg.WXMediaMessage.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class SendMessageToWX {
					}
					export module SendMessageToWX {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public static WXSceneSession: number;
							public static WXSceneTimeline: number;
							public static WXSceneFavorite: number;
							public static WXSceneSpecifiedContact: number;
							public message: com.tencent.mm.opensdk.modelmsg.WXMediaMessage;
							public scene: number;
							public userOpenId: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.modelmsg.WXMediaMessage.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class ShowMessageFromWX {
					}
					export module ShowMessageFromWX {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public message: com.tencent.mm.opensdk.modelmsg.WXMediaMessage;
							public lang: string;
							public country: string;
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public checkArgs(): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXAppExtendObject {
						public extInfo: string;
						public filePath: string;
						public fileData: native.Array<number>;
						public constructor();
						public type(): number;
						public constructor(param0: string, param1: native.Array<number>);
						public serialize(param0: androidosBundle): void;
						public constructor(param0: string, param1: string);
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.modelmsg.WXAppLaunchData.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXAppLaunchData {
						public static ACTION_HANDLE_WXAPPLAUNCH: string;
						public static ACTION_HANDLE_WXAPP_RESULT: string;
						public static ACTION_HANDLE_WXAPP_SHOW: string;
						public launchType: number;
						public message: string;
						public constructor();
					}
					export module WXAppLaunchData {
						export class Builder {
							public constructor();
							public static fromBundle(param0: androidosBundle): com.tencent.mm.opensdk.modelmsg.WXAppLaunchData;
							public static toBundle(param0: com.tencent.mm.opensdk.modelmsg.WXAppLaunchData): androidosBundle;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXDesignerSharedObject {
						public thumburl: string;
						public designerUIN: number;
						public designerName: string;
						public designerRediretctUrl: string;
						public url: string;
						public constructor();
						public type(): number;
						public constructor(param0: string, param1: number, param2: string, param3: string);
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXDynamicVideoMiniProgramObject extends com.tencent.mm.opensdk.modelmsg.WXMiniProgramObject {
						public videoSource: string;
						public constructor();
						public type(): number;
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXEmojiObject {
						public emojiData: native.Array<number>;
						public emojiPath: string;
						public constructor();
						public constructor(param0: native.Array<number>);
						public type(): number;
						public setEmojiPath(param0: string): void;
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
						public constructor(param0: string);
						public setEmojiData(param0: native.Array<number>): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXEmojiPageSharedObject {
						public tid: number;
						public title: string;
						public desc: string;
						public iconUrl: string;
						public secondUrl: string;
						public pageType: number;
						public url: string;
						public constructor();
						public type(): number;
						public constructor(param0: number, param1: number, param2: string, param3: string, param4: string, param5: string, param6: number, param7: string);
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXEmojiSharedObject {
						public thumburl: string;
						public packageflag: number;
						public packageid: string;
						public url: string;
						public constructor();
						public type(): number;
						public constructor(param0: string, param1: number, param2: string, param3: string);
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXEnterpriseCardObject {
						public msgType: number;
						public cardInfo: string;
						public constructor();
						public type(): number;
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXFileObject {
						public fileData: native.Array<number>;
						public filePath: string;
						public setContentLengthLimit(param0: number): void;
						public constructor();
						public constructor(param0: native.Array<number>);
						public type(): number;
						public setFileData(param0: native.Array<number>): void;
						public serialize(param0: androidosBundle): void;
						public setFilePath(param0: string): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXGameVideoFileObject {
						public filePath: string;
						public videoUrl: string;
						public thumbUrl: string;
						public constructor();
						public type(): number;
						public constructor(param0: string, param1: string, param2: string);
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

import androidgraphicsBitmap = android.graphics.Bitmap;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXImageObject {
						public imageData: native.Array<number>;
						public imagePath: string;
						public constructor();
						public constructor(param0: native.Array<number>);
						public type(): number;
						public setImagePath(param0: string): void;
						public serialize(param0: androidosBundle): void;
						public constructor(param0: androidgraphicsBitmap);
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXLocationObject {
						public lat: number;
						public lng: number;
						public constructor();
						public type(): number;
						public serialize(param0: androidosBundle): void;
						public constructor(param0: number, param1: number);
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.modelmsg.WXMediaMessage.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXMediaMessage {
						public static THUMB_LENGTH_LIMIT: number;
						public static MINI_PROGRAM__THUMB_LENGHT: number;
						public static TITLE_LENGTH_LIMIT: number;
						public static DESCRIPTION_LENGTH_LIMIT: number;
						public static MEDIA_TAG_NAME_LENGTH_LIMIT: number;
						public static MESSAGE_ACTION_LENGTH_LIMIT: number;
						public static MESSAGE_EXT_LENGTH_LIMIT: number;
						public static ACTION_WXAPPMESSAGE: string;
						public sdkVer: number;
						public title: string;
						public description: string;
						public thumbData: native.Array<number>;
						public mediaObject: com.tencent.mm.opensdk.modelmsg.WXMediaMessage.IMediaObject;
						public mediaTagName: string;
						public messageAction: string;
						public messageExt: string;
						public constructor();
						public constructor(param0: com.tencent.mm.opensdk.modelmsg.WXMediaMessage.IMediaObject);
						public getType(): number;
						public setThumbImage(param0: androidgraphicsBitmap): void;
					}
					export module WXMediaMessage {
						export class Builder {
							public static KEY_IDENTIFIER: string;
							public constructor();
							public static toBundle(param0: com.tencent.mm.opensdk.modelmsg.WXMediaMessage): androidosBundle;
							public static fromBundle(param0: androidosBundle): com.tencent.mm.opensdk.modelmsg.WXMediaMessage;
						}
						export class IMediaObject {
							/**
							 * Constructs a new instance of the com.tencent.mm.opensdk.modelmsg.WXMediaMessage$IMediaObject interface with the provided implementation.
							 */
							public constructor(implementation: {
								serialize(param0: androidosBundle): void;
								unserialize(param0: androidosBundle): void;
								type(): number;
								checkArgs(): boolean;
							});
							public static TYPE_CARD_SHARE: number;
							public static TYPE_EMOTICON_SHARED: number;
							public static TYPE_LOCATION_SHARE: number;
							public static TYPE_EMOJILIST_SHARED: number;
							public static TYPE_DEVICE_ACCESS: number;
							public static TYPE_EMOTIONLIST_SHARED: number;
							public static TYPE_LOCATION: number;
							public static TYPE_RECORD: number;
							public static TYPE_VIDEO_FILE: number;
							public static TYPE_NOTE: number;
							public static TYPE_TEXT: number;
							public static TYPE_VIDEO: number;
							public static TYPE_MUSIC: number;
							public static TYPE_PRODUCT: number;
							public static TYPE_GIFTCARD: number;
							public static TYPE_BUSINESS_CARD: number;
							public static TYPE_OPENSDK_APPBRAND_WEISHIVIDEO: number;
							public static TYPE_TV: number;
							public static TYPE_EMOTICON_GIFT: number;
							public static TYPE_FILE: number;
							public static TYPE_OLD_TV: number;
							public static TYPE_GAME_VIDEO_FILE: number;
							public static TYPE_URL: number;
							public static TYPE_IMAGE: number;
							public static TYPE_DESIGNER_SHARED: number;
							public static TYPE_APPDATA: number;
							public static TYPE_OPENSDK_APPBRAND: number;
							public static TYPE_MALL_PRODUCT: number;
							public static TYPE_EMOJI: number;
							public static TYPE_APPBRAND: number;
							public static TYPE_UNKNOWN: number;
							public unserialize(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public serialize(param0: androidosBundle): void;
							public type(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXMiniProgramObject {
						public static MINIPTOGRAM_TYPE_RELEASE: number;
						public static MINIPROGRAM_TYPE_TEST: number;
						public static MINIPROGRAM_TYPE_PREVIEW: number;
						public webpageUrl: string;
						public userName: string;
						public path: string;
						public withShareTicket: boolean;
						public miniprogramType: number;
						public constructor();
						public type(): number;
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXMusicObject {
						public musicUrl: string;
						public musicLowBandUrl: string;
						public musicDataUrl: string;
						public musicLowBandDataUrl: string;
						public constructor();
						public type(): number;
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXTextObject {
						public text: string;
						public constructor();
						public type(): number;
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXVideoFileObject {
						public static WXVideoFileShareSceneCommon: number;
						public static WXVideoFileShareSceneFromWX: number;
						public filePath: string;
						public shareScene: number;
						public shareTicket: string;
						public constructor();
						public type(): number;
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXVideoObject {
						public videoUrl: string;
						public videoLowBandUrl: string;
						public constructor();
						public type(): number;
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelmsg {
					export class WXWebpageObject {
						public webpageUrl: string;
						public extInfo: string;
						public canvasPageXml: string;
						public constructor();
						public type(): number;
						public serialize(param0: androidosBundle): void;
						public unserialize(param0: androidosBundle): void;
						public checkArgs(): boolean;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelpay {
					export class JumpToOfflinePay {
						public constructor();
					}
					export module JumpToOfflinePay {
						export class Req extends com.tencent.mm.opensdk.modelbase.BaseReq {
							public constructor();
							public getType(): number;
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
						export class Resp extends com.tencent.mm.opensdk.modelbase.BaseResp {
							public constructor();
							public getType(): number;
							public constructor(param0: androidosBundle);
							public toBundle(param0: androidosBundle): void;
							public checkArgs(): boolean;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelpay {
					export class PayReq extends com.tencent.mm.opensdk.modelbase.BaseReq {
						public appId: string;
						public partnerId: string;
						public prepayId: string;
						public nonceStr: string;
						public timeStamp: string;
						public packageValue: string;
						public sign: string;
						public extData: string;
						public options: com.tencent.mm.opensdk.modelpay.PayReq.Options;
						public signType: string;
						public constructor();
						public fromBundle(param0: androidosBundle): void;
						public getType(): number;
						public toBundle(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
					export module PayReq {
						export class Options {
							public static INVALID_FLAGS: number;
							public callbackClassName: string;
							public callbackFlags: number;
							public constructor();
							public toBundle(param0: androidosBundle): void;
							public fromBundle(param0: androidosBundle): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module modelpay {
					export class PayResp extends com.tencent.mm.opensdk.modelbase.BaseResp {
						public prepayId: string;
						public returnKey: string;
						public extData: string;
						public constructor();
						public constructor(param0: androidosBundle);
						public fromBundle(param0: androidosBundle): void;
						public getType(): number;
						public toBundle(param0: androidosBundle): void;
						public checkArgs(): boolean;
					}
				}
			}
		}
	}
}

import androidcontentIntent = android.content.Intent;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.modelbase.BaseReq.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.modelbase.BaseResp.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.openapi.IWXAPIEventHandler.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.utils.ILog.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module openapi {
					export class BaseWXApiImplV10 {
						public static TAG: string;
						public context: androidcontentContext;
						public appId: string;
						public checkSignature: boolean;
						public detached: boolean;
						public isWXAppInstalled(): boolean;
						public getWXAppSupportAPI(): number;
						public unregisterApp(): void;
						public registerApp(param0: string): boolean;
						public openWXApp(): boolean;
						public setLogImpl(param0: com.tencent.mm.opensdk.utils.ILog): void;
						public sendResp(param0: com.tencent.mm.opensdk.modelbase.BaseResp): boolean;
						public detach(): void;
						public sendReq(param0: com.tencent.mm.opensdk.modelbase.BaseReq): boolean;
						public registerApp(param0: string, param1: number): boolean;
						public handleIntent(param0: androidcontentIntent, param1: com.tencent.mm.opensdk.openapi.IWXAPIEventHandler): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.modelbase.BaseReq.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.modelbase.BaseResp.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.openapi.IWXAPIEventHandler.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.utils.ILog.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module openapi {
					export class IWXAPI {
						/**
						 * Constructs a new instance of the com.tencent.mm.opensdk.openapi.IWXAPI interface with the provided implementation.
						 */
						public constructor(implementation: {
							registerApp(param0: string): boolean;
							registerApp(param0: string, param1: number): boolean;
							unregisterApp(): void;
							handleIntent(param0: androidcontentIntent, param1: com.tencent.mm.opensdk.openapi.IWXAPIEventHandler): boolean;
							isWXAppInstalled(): boolean;
							getWXAppSupportAPI(): number;
							openWXApp(): boolean;
							sendReq(param0: com.tencent.mm.opensdk.modelbase.BaseReq): boolean;
							sendResp(param0: com.tencent.mm.opensdk.modelbase.BaseResp): boolean;
							detach(): void;
							setLogImpl(param0: com.tencent.mm.opensdk.utils.ILog): void;
						});
						public isWXAppInstalled(): boolean;
						public getWXAppSupportAPI(): number;
						public unregisterApp(): void;
						public registerApp(param0: string): boolean;
						public openWXApp(): boolean;
						public setLogImpl(param0: com.tencent.mm.opensdk.utils.ILog): void;
						public sendResp(param0: com.tencent.mm.opensdk.modelbase.BaseResp): boolean;
						public detach(): void;
						public sendReq(param0: com.tencent.mm.opensdk.modelbase.BaseReq): boolean;
						public registerApp(param0: string, param1: number): boolean;
						public handleIntent(param0: androidcontentIntent, param1: com.tencent.mm.opensdk.openapi.IWXAPIEventHandler): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.tencent.mm.opensdk.modelbase.BaseReq.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.modelbase.BaseResp.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module openapi {
					export class IWXAPIEventHandler {
						/**
						 * Constructs a new instance of the com.tencent.mm.opensdk.openapi.IWXAPIEventHandler interface with the provided implementation.
						 */
						public constructor(implementation: {
							onReq(param0: com.tencent.mm.opensdk.modelbase.BaseReq): void;
							onResp(param0: com.tencent.mm.opensdk.modelbase.BaseResp): void;
						});
						public onResp(param0: com.tencent.mm.opensdk.modelbase.BaseResp): void;
						public onReq(param0: com.tencent.mm.opensdk.modelbase.BaseReq): void;
					}
				}
			}
		}
	}
}

import javautilMap = java.util.Map;
import androidcontentSharedPreferencesEditor = android.content.SharedPreferences.Editor;
import androidcontentSharedPreferencesOnSharedPreferenceChangeListener = android.content.SharedPreferences.OnSharedPreferenceChangeListener;
import javautilSet = java.util.Set;
import androidcontentContentResolver = android.content.ContentResolver;
/// <reference path="./android.content.ContentResolver.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module openapi {
					export class MMSharedPreferences {
						public getInt(param0: string, param1: number): number;
						public unregisterOnSharedPreferenceChangeListener(param0: androidcontentSharedPreferencesOnSharedPreferenceChangeListener): void;
						public getString(param0: string, param1: string): string;
						public getStringSet(param0: string, param1: javautilSet): javautilSet;
						public contains(param0: string): boolean;
						public getLong(param0: string, param1: number): number;
						public edit(): androidcontentSharedPreferencesEditor;
						public registerOnSharedPreferenceChangeListener(param0: androidcontentSharedPreferencesOnSharedPreferenceChangeListener): void;
						public getFloat(param0: string, param1: number): number;
						public constructor(param0: androidcontentContext);
						public getAll(): javautilMap;
						public getBoolean(param0: string, param1: boolean): boolean;
					}
					export module MMSharedPreferences {
						export class REditor {
							public constructor(param0: androidcontentContentResolver);
							public commit(): boolean;
							public apply(): void;
							public putString(param0: string, param1: string): androidcontentSharedPreferencesEditor;
							public putLong(param0: string, param1: number): androidcontentSharedPreferencesEditor;
							public putFloat(param0: string, param1: number): androidcontentSharedPreferencesEditor;
							public putStringSet(param0: string, param1: javautilSet): androidcontentSharedPreferencesEditor;
							public putBoolean(param0: string, param1: boolean): androidcontentSharedPreferencesEditor;
							public remove(param0: string): androidcontentSharedPreferencesEditor;
							public putInt(param0: string, param1: number): androidcontentSharedPreferencesEditor;
							public clear(): androidcontentSharedPreferencesEditor;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.openapi.IWXAPI.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module openapi {
					export class WXAPIFactory {
						public static createWXAPI(param0: androidcontentContext, param1: string): com.tencent.mm.opensdk.openapi.IWXAPI;
						public static createWXAPI(param0: androidcontentContext, param1: string, param2: boolean): com.tencent.mm.opensdk.openapi.IWXAPI;
					}
				}
			}
		}
	}
}

import androidcontentpmSignature = android.content.pm.Signature;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.pm.Signature.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module openapi {
					export class WXApiImplComm {
						public static isIntentFromWx(param0: androidcontentIntent, param1: string): boolean;
						public static validateAppSignatureForPackage(param0: androidcontentContext, param1: string, param2: boolean): boolean;
						public static validateAppSignature(param0: androidcontentContext, param1: native.Array<androidcontentpmSignature>, param2: boolean): boolean;
					}
				}
			}
		}
	}
}

import androidappActivity = android.app.Activity;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.modelbase.BaseReq.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.modelbase.BaseResp.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.openapi.IWXAPIEventHandler.d.ts" />
/// <reference path="./com.tencent.mm.opensdk.utils.ILog.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module openapi {
					export class WXApiImplV10 extends com.tencent.mm.opensdk.openapi.BaseWXApiImplV10 {
						public isWXAppInstalled(): boolean;
						public getWXAppSupportAPI(): number;
						public unregisterApp(): void;
						public registerApp(param0: string): boolean;
						public openWXApp(): boolean;
						public setLogImpl(param0: com.tencent.mm.opensdk.utils.ILog): void;
						public sendResp(param0: com.tencent.mm.opensdk.modelbase.BaseResp): boolean;
						public detach(): void;
						public sendReq(param0: com.tencent.mm.opensdk.modelbase.BaseReq): boolean;
						public registerApp(param0: string, param1: number): boolean;
						public handleIntent(param0: androidcontentIntent, param1: com.tencent.mm.opensdk.openapi.IWXAPIEventHandler): boolean;
					}
					export module WXApiImplV10 {
						export class ActivityLifecycleCb {
							public onActivityStopped(param0: androidappActivity): void;
							public onActivitySaveInstanceState(param0: androidappActivity, param1: androidosBundle): void;
							public detach(): void;
							public onActivityStarted(param0: androidappActivity): void;
							public onActivityResumed(param0: androidappActivity): void;
							public onActivityDestroyed(param0: androidappActivity): void;
							public onActivityCreated(param0: androidappActivity, param1: androidosBundle): void;
							public onActivityPaused(param0: androidappActivity): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module utils {
					export class ILog {
						/**
						 * Constructs a new instance of the com.tencent.mm.opensdk.utils.ILog interface with the provided implementation.
						 */
						public constructor(implementation: {
							v(param0: string, param1: string): void;
							d(param0: string, param1: string): void;
							i(param0: string, param1: string): void;
							w(param0: string, param1: string): void;
							e(param0: string, param1: string): void;
						});
						public w(param0: string, param1: string): void;
						public v(param0: string, param1: string): void;
						public e(param0: string, param1: string): void;
						public d(param0: string, param1: string): void;
						public i(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.tencent.mm.opensdk.utils.ILog.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module utils {
					export class Log {
						public static v(param0: string, param1: string): void;
						public static w(param0: string, param1: string): void;
						public constructor();
						public static i(param0: string, param1: string): void;
						public static d(param0: string, param1: string): void;
						public static setLogImpl(param0: com.tencent.mm.opensdk.utils.ILog): void;
						public static e(param0: string, param1: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module utils {
					export class a {
						public static a(param0: androidosBundle, param1: string): number;
						public static b(param0: androidosBundle, param1: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module utils {
					export class b {
						public static e(param0: native.Array<number>): string;
					}
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
import androidnetUri = android.net.Uri;
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module utils {
					export class c {
					}
					export module c {
						export class a {
							public static a(param0: number, param1: string): javalangObject;
						}
						export class b {
							public static CONTENT_URI: androidnetUri;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module mm {
			export module opensdk {
				export module utils {
					export class d {
						public static i(param0: string): boolean;
						public static c(param0: number): boolean;
						public static j(param0: string): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class EasyActivity {
					public constructor();
					public onPause(): void;
					public onResume(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class EasyListActivity {
					public constructor();
					public onPause(): void;
					public onResume(): void;
				}
			}
		}
	}
}

import javalangThrowable = java.lang.Throwable;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class MtaSDkException {
					public constructor(param0: string, param1: javalangThrowable);
					public constructor(param0: string);
					public constructor();
					public constructor(param0: javalangThrowable);
				}
			}
		}
	}
}

import orgjsonJSONObject = org.json.JSONObject;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class NetworkMonitor {
					public setMillisecondsConsume(param0: number): void;
					public getStatusCode(): number;
					public getPort(): number;
					public constructor();
					public getMillisecondsConsume(): number;
					public toJSONObject(): orgjsonJSONObject;
					public getRemoteIp(): string;
					public getDomain(): string;
					public setStatusCode(param0: number): void;
					public setRemoteIp(param0: string): void;
					public setDomain(param0: string): void;
					public setPort(param0: number): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class StatAccount {
					public static DEFAULT_TYPE: number;
					public static QQ_NUM_TYPE: number;
					public static WECHAT_ID_TYPE: number;
					public static QQ_OPENID_TYPE: number;
					public static WECHAT_OPENID_TYPE: number;
					public static PHONE_NUM_TYPE: number;
					public static EMAIL_TYPE: number;
					public static CUSTOM_TYPE: number;
					public getExt(): string;
					public getExt1(): string;
					public getAccountType(): number;
					public toString(): string;
					public setAccount(param0: string): void;
					public constructor(param0: string);
					public setExt1(param0: string): void;
					public toJsonString(): string;
					public getAccount(): string;
					public constructor(param0: string, param1: number);
					public setAccountType(param0: number): void;
					public setExt(param0: string): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class StatAppMonitor {
					public static SUCCESS_RESULT_TYPE: number;
					public static FAILURE_RESULT_TYPE: number;
					public static LOGIC_FAILURE_RESULT_TYPE: number;
					public setResultType(param0: number): void;
					public setSampling(param0: number): void;
					public constructor(param0: string);
					public setReturnCode(param0: number): void;
					public getReqSize(): number;
					public getRespSize(): number;
					public getSampling(): number;
					public setMillisecondsConsume(param0: number): void;
					public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
					public clone(): com.tencent.wxop.stat.StatAppMonitor;
					public setInterfaceName(param0: string): void;
					public getResultType(): number;
					public getReturnCode(): number;
					public getMillisecondsConsume(): number;
					public setRespSize(param0: number): void;
					public getInterfaceName(): string;
					public setReqSize(param0: number): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatReportStrategy.d.ts" />
/// <reference path="./com.tencent.wxop.stat.g.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class StatConfig {
					public static getLocalMidOnly(param0: androidcontentContext): string;
					public static getCurSessionStatReportCount(): number;
					public static getFlushDBSpaceMS(): number;
					public static setNumEventsCommitPerSec(param0: number): void;
					public static isEnableConcurrentProcess(): boolean;
					public static setDebugEnable(param0: boolean): void;
					public static getReportCompressedSize(): number;
					public static getCustomProperty(param0: string): string;
					public static setMaxDaySessionNumbers(param0: number): void;
					public constructor();
					public static setSendPeriodMinutes(param0: number): void;
					public static setSessionTimoutMillis(param0: number): void;
					public static setMaxBatchReportCount(param0: number): void;
					public static setCustomUserId(param0: androidcontentContext, param1: string): void;
					public static getMaxSendRetryCount(): number;
					public static getMsPeriodForMethodsCalledLimitClear(): number;
					public static getCustomUserId(param0: androidcontentContext): string;
					public static getStatReportUrl(): string;
					public static setInstallChannel(param0: androidcontentContext, param1: string): void;
					public static isEnableStatService(): boolean;
					public static setXGProMode(param0: boolean): void;
					public static setEnableSmartReporting(param0: boolean): void;
					public static setEnableConcurrentProcess(param0: boolean): void;
					public static setNumEventsCachedInMemory(param0: number): void;
					public static setFlushDBSpaceMS(param0: number): void;
					public static setReportCompressedSize(param0: number): void;
					public static setEnableStatService(param0: boolean): void;
					public static setMaxStoreEventCount(param0: number): void;
					public static setStatReportUrl(param0: string): void;
					public static getSendPeriodMinutes(): number;
					public static setMaxParallelTimmingEvents(param0: number): void;
					public static getStatSendStrategy(): com.tencent.wxop.stat.StatReportStrategy;
					public static isXGProMode(): boolean;
					public static isDebugEnable(): boolean;
					public static setNumOfMethodsCalledLimit(param0: number, param1: number): void;
					public static setCustomLogger(param0: com.tencent.wxop.stat.g): void;
					public static getAppKey(param0: androidcontentContext): string;
					public static isReportEventsByOrder(): boolean;
					public static getCustomLogger(): com.tencent.wxop.stat.g;
					public static setMaxImportantDataSendRetryCount(param0: number): void;
					public static setAppKey(param0: androidcontentContext, param1: string): void;
					public static setAutoExceptionCaught(param0: boolean): void;
					public static setStatSendStrategy(param0: com.tencent.wxop.stat.StatReportStrategy): void;
					public static getNumEventsCommitPerSec(): number;
					public static getMaxImportantDataSendRetryCount(): number;
					public static getMaxStoreEventCount(): number;
					public static isEnableSmartReporting(): boolean;
					public static setInstallChannel(param0: string): void;
					public static getMaxSessionStatReportCount(): number;
					public static isAutoExceptionCaught(): boolean;
					public static setReportEventsByOrder(param0: boolean): void;
					public static getNumEventsCachedInMemory(): number;
					public static getInstallChannel(param0: androidcontentContext): string;
					public static getMaxDaySessionNumbers(): number;
					public static getMaxReportEventLength(): number;
					public static getMaxParallelTimmingEvents(): number;
					public static getSessionTimoutMillis(): number;
					public static getStatReportHost(): string;
					public static getNumOfMethodsCalledLimit(): number;
					public static setAppKey(param0: string): void;
					public static setMaxReportEventLength(param0: number): void;
					public static getCustomProperty(param0: string, param1: string): string;
					public static setQQ(param0: androidcontentContext, param1: string): void;
					public static setMaxSessionStatReportCount(param0: number): void;
					public static getMaxBatchReportCount(): number;
					public static setMaxSendRetryCount(param0: number): void;
					public static getQQ(param0: androidcontentContext): string;
					public static getMid(param0: androidcontentContext): string;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class StatGameUser {
					public getWorldName(): string;
					public setWorldName(param0: string): void;
					public toString(): string;
					public setAccount(param0: string): void;
					public constructor();
					public setLevel(param0: string): void;
					public getAccount(): string;
					public clone(): com.tencent.wxop.stat.StatGameUser;
					public constructor(param0: string, param1: string, param2: string);
					public getLevel(): string;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class StatReportStrategy {
					public static INSTANT: com.tencent.wxop.stat.StatReportStrategy;
					public static ONLY_WIFI: com.tencent.wxop.stat.StatReportStrategy;
					public static BATCH: com.tencent.wxop.stat.StatReportStrategy;
					public static APP_LAUNCH: com.tencent.wxop.stat.StatReportStrategy;
					public static DEVELOPER: com.tencent.wxop.stat.StatReportStrategy;
					public static PERIOD: com.tencent.wxop.stat.StatReportStrategy;
					public static ONLY_WIFI_NO_CACHE: com.tencent.wxop.stat.StatReportStrategy;
					public static values(): native.Array<com.tencent.wxop.stat.StatReportStrategy>;
					public static getStatReportStrategy(param0: number): com.tencent.wxop.stat.StatReportStrategy;
					public static valueOf(param0: string): com.tencent.wxop.stat.StatReportStrategy;
					public a(): number;
				}
			}
		}
	}
}

import javautilProperties = java.util.Properties;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatAccount.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatAppMonitor.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatGameUser.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class StatService {
					public static trackCustomEvent(param0: androidcontentContext, param1: string, param2: native.Array<string>): void;
					public static reportError(param0: androidcontentContext, param1: string): void;
					public static startStatService(param0: androidcontentContext, param1: string, param2: string): boolean;
					public static reportGameUser(param0: androidcontentContext, param1: com.tencent.wxop.stat.StatGameUser): void;
					public static reportAppMonitorStat(param0: androidcontentContext, param1: com.tencent.wxop.stat.StatAppMonitor): void;
					public static trackBeginPage(param0: androidcontentContext, param1: string): void;
					public static trackCustomKVTimeIntervalEvent(param0: androidcontentContext, param1: number, param2: string, param3: javautilProperties): void;
					public constructor();
					public static onResume(param0: androidcontentContext): void;
					public static stopSession(): void;
					public static onPause(param0: androidcontentContext): void;
					public static trackCustomBeginKVEvent(param0: androidcontentContext, param1: string, param2: javautilProperties): void;
					public static testSpeed(param0: androidcontentContext, param1: javautilMap): void;
					public static trackCustomEndEvent(param0: androidcontentContext, param1: string, param2: native.Array<string>): void;
					public static onStop(param0: androidcontentContext): void;
					public static trackEndPage(param0: androidcontentContext, param1: string): void;
					public static reportAccount(param0: androidcontentContext, param1: com.tencent.wxop.stat.StatAccount): void;
					public static reportException(param0: androidcontentContext, param1: javalangThrowable): void;
					public static testSpeed(param0: androidcontentContext): void;
					public static flushDataToDB(param0: androidcontentContext): void;
					public static reportQQ(param0: androidcontentContext, param1: string): void;
					public static setCommonKeyValueForKVEvent(param0: string, param1: javautilProperties): void;
					public static getCommonKeyValueForKVEvent(param0: string): javautilProperties;
					public static setContext(param0: androidcontentContext): void;
					public static startNewSession(param0: androidcontentContext): void;
					public static onLowMemory(param0: androidcontentContext): void;
					public static commitEvents(param0: androidcontentContext, param1: number): void;
					public static trackCustomBeginEvent(param0: androidcontentContext, param1: string, param2: native.Array<string>): void;
					public static setEnvAttributes(param0: androidcontentContext, param1: javautilMap): void;
					public static trackCustomEndKVEvent(param0: androidcontentContext, param1: string, param2: javautilProperties): void;
					public static trackCustomKVEvent(param0: androidcontentContext, param1: string, param2: javautilProperties): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatAccount.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatAppMonitor.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatGameUser.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatSpecifyReportedInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class StatServiceImpl {
					public static trackCustomEvent(param0: androidcontentContext, param1: string, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo, param3: native.Array<string>): void;
					public static reportGameUser(param0: androidcontentContext, param1: com.tencent.wxop.stat.StatGameUser, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static reportAccount(param0: androidcontentContext, param1: com.tencent.wxop.stat.StatAccount, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static trackCustomEndEvent(param0: androidcontentContext, param1: string, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo, param3: native.Array<string>): void;
					public static trackCustomBeginKVEvent(param0: androidcontentContext, param1: string, param2: javautilProperties, param3: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static trackCustomKVEvent(param0: androidcontentContext, param1: string, param2: javautilProperties, param3: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static testSpeed(param0: androidcontentContext, param1: javautilMap, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public constructor();
					public static startStatService(param0: androidcontentContext, param1: string, param2: string, param3: com.tencent.wxop.stat.StatSpecifyReportedInfo): boolean;
					public static stopSession(): void;
					public static trackCustomBeginEvent(param0: androidcontentContext, param1: string, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo, param3: native.Array<string>): void;
					public static trackCustomEndKVEvent(param0: androidcontentContext, param1: string, param2: javautilProperties, param3: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static trackCustomTimeIntervalEvent(param0: androidcontentContext, param1: number, param2: string, param3: native.Array<string>): void;
					public static trackBeginPage(param0: androidcontentContext, param1: string, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static onResume(param0: androidcontentContext, param1: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static getContext(param0: androidcontentContext): androidcontentContext;
					public static startNewSession(param0: androidcontentContext, param1: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static trackEndPage(param0: androidcontentContext, param1: string, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static testSpeed(param0: androidcontentContext): void;
					public static trackCustomKVTimeIntervalEvent(param0: androidcontentContext, param1: string, param2: javautilProperties, param3: number, param4: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static flushDataToDB(param0: androidcontentContext): void;
					public static setCommonKeyValueForKVEvent(param0: string, param1: javautilProperties): void;
					public static getCommonKeyValueForKVEvent(param0: string): javautilProperties;
					public static reportAppMonitorStat(param0: androidcontentContext, param1: com.tencent.wxop.stat.StatAppMonitor, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static setContext(param0: androidcontentContext): void;
					public static onStop(param0: androidcontentContext, param1: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static onLowMemory(param0: androidcontentContext): void;
					public static commitEvents(param0: androidcontentContext, param1: number): void;
					public static reportQQ(param0: androidcontentContext, param1: string, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static reportError(param0: androidcontentContext, param1: string, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static reportException(param0: androidcontentContext, param1: javalangThrowable, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
					public static setEnvAttributes(param0: androidcontentContext, param1: javautilMap): void;
					public static onPause(param0: androidcontentContext, param1: com.tencent.wxop.stat.StatSpecifyReportedInfo): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class StatSpecifyReportedInfo {
					public setVersion(param0: string): void;
					public getVersion(): string;
					public toString(): string;
					public isSendImmediately(): boolean;
					public setSendImmediately(param0: boolean): void;
					public getAppKey(): string;
					public setInstallChannel(param0: string): void;
					public constructor();
					public setImportant(param0: boolean): void;
					public getInstallChannel(): string;
					public setAppKey(param0: string): void;
					public isImportant(): boolean;
				}
			}
		}
	}
}

import orgapachehttpHttpHost = org.apache.http.HttpHost;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.apache.http.HttpHost.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class a {
					public a(): orgapachehttpHttpHost;
					public e(): boolean;
					public f(): boolean;
					public static a(param0: androidcontentContext): com.tencent.wxop.stat.a;
					public h(): void;
					public d(): void;
					public b(): string;
					public a(param0: string): void;
					public c(): number;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class aa {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ab {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ac {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ad {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ae {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class af {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ag {
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ah {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ai {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class aj {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ak {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class al {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class am {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class an {
					public run(): void;
				}
			}
		}
	}
}

import javalangThread = java.lang.Thread;
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ao {
					public uncaughtException(param0: javalangThread, param1: javalangThrowable): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatSpecifyReportedInfo.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ap {
					public run(): void;
					public constructor(param0: androidcontentContext, param1: javautilMap, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo);
				}
			}
		}
	}
}

/// <reference path="./com.tencent.wxop.stat.event.e.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class aq {
					public constructor(param0: com.tencent.wxop.stat.event.e);
					public a(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ar {
					public b(): void;
					public a(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class as {
					public b(): void;
					public a(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class at {
					public b(): void;
					public a(): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.common.a.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class au {
					public b(param0: androidcontentContext): com.tencent.wxop.stat.common.a;
					public static a(param0: androidcontentContext): com.tencent.wxop.stat.au;
					public a(): number;
					public static b(): com.tencent.wxop.stat.au;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class av {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class aw {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ax {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ay {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class az {
					public run(): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class b {
					public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class ba {
					public b(): void;
					public a(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class bb {
					public run(): void;
				}
			}
		}
	}
}

import androiddatabasesqliteSQLiteDatabase = android.database.sqlite.SQLiteDatabase;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class bc {
					public constructor(param0: androidcontentContext, param1: string);
					public onCreate(param0: androiddatabasesqliteSQLiteDatabase): void;
					public onUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
					public close(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class bd {
					public toString(): string;
					public constructor(param0: number, param1: string, param2: number, param3: number);
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class c {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class StatConstants {
						public static VERSION: string;
						public static MTA_SERVER_HOST: string;
						public static MTA_SERVER_PORT: number;
						public static MTA_SERVER: string;
						public static MTA_STAT_URL: string;
						public static MTA_REPORT_FULL_URL: string;
						public static MTA_COOPERATION_TAG: string;
						public static MTA_STORAGE_PRE_TAG: string;
						public static STAT_DB_VERSION: number;
						public static SDK_ONLINE_CONFIG_TYPE: number;
						public static USER_ONLINE_CONFIG_TYPE: number;
						public static DATABASE_NAME: string;
						public static LOG_TAG: string;
						public static XG_PRO_VERSION: number;
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class StatLogger {
						public constructor();
						public w(param0: javalangObject): void;
						public error(param0: javalangObject): void;
						public setDebugEnable(param0: boolean): void;
						public isDebugEnable(): boolean;
						public setTag(param0: string): void;
						public getLogLevel(): number;
						public warn(param0: javalangObject): void;
						public verbose(param0: javalangObject): void;
						public d(param0: javalangObject): void;
						public e(param0: javalangThrowable): void;
						public info(param0: javalangObject): void;
						public v(param0: javalangObject): void;
						public error(param0: javalangThrowable): void;
						public e(param0: javalangObject): void;
						public debug(param0: javalangObject): void;
						public i(param0: javalangObject): void;
						public setLogLevel(param0: number): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class a {
						public constructor();
						public d(): number;
						public b(): string;
						public c(): string;
						public constructor(param0: string, param1: string, param2: number);
						public toString(): string;
						public a(param0: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class b {
						public a(param0: orgjsonJSONObject, param1: javalangThread): void;
						public constructor(param0: androidcontentContext);
						public static a(param0: androidcontentContext, param1: javautilMap): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class c {
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class d {
					}
				}
			}
		}
	}
}

import javalangRunnable = java.lang.Runnable;
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class e {
						public constructor();
						public a(param0: javalangRunnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class f {
						public static a(param0: native.Array<number>): native.Array<number>;
						public static b(param0: native.Array<number>): native.Array<number>;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class g {
						public a(param0: string, param1: string): boolean;
						public static a(param0: androidcontentContext): com.tencent.wxop.stat.common.g;
						public a(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class h {
						public static a(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
						public static b(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
						public static b(param0: native.Array<number>, param1: number): native.Array<number>;
						public static a(param0: native.Array<number>, param1: number): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export abstract class i {
						public a: native.Array<number>;
						public b: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class j extends com.tencent.wxop.stat.common.i {
						public constructor(param0: number, param1: native.Array<number>);
						public a(param0: native.Array<number>, param1: number, param2: number, param3: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class k extends com.tencent.wxop.stat.common.i {
						public d: boolean;
						public e: boolean;
						public f: boolean;
						public constructor(param0: number, param1: native.Array<number>);
						public a(param0: native.Array<number>, param1: number, param2: number, param3: boolean): boolean;
					}
				}
			}
		}
	}
}

import androidutilDisplayMetrics = android.util.DisplayMetrics;
import javalangInteger = java.lang.Integer;
import javalangLong = java.lang.Long;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.DisplayMetrics.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatSpecifyReportedInfo.d.ts" />
/// <reference path="./com.tencent.wxop.stat.common.StatLogger.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.apache.http.HttpHost.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class l {
						public static l(param0: androidcontentContext): string;
						public static n(param0: androidcontentContext): string;
						public static i(param0: androidcontentContext): boolean;
						public static m(param0: androidcontentContext): number;
						public static a(param0: number): string;
						public static r(param0: androidcontentContext): string;
						public static p(param0: androidcontentContext): string;
						public static a(param0: string, param1: string, param2: number, param3: number, param4: javalangLong): javalangLong;
						public static d(): string;
						public static a(param0: string): string;
						public static b(param0: androidcontentContext): string;
						public static a(param0: com.tencent.wxop.stat.StatSpecifyReportedInfo): boolean;
						public static t(param0: androidcontentContext): string;
						public static b(): com.tencent.wxop.stat.common.StatLogger;
						public static A(param0: androidcontentContext): string;
						public static c(param0: string): boolean;
						public static a(param0: androidcontentContext, param1: boolean): number;
						public static c(): number;
						public static a(param0: androidcontentContext, param1: string): string;
						public static a(param0: androidcontentContext): orgapachehttpHttpHost;
						public static y(param0: androidcontentContext): number;
						public static g(param0: androidcontentContext): string;
						public static b(param0: string): number;
						public static s(param0: androidcontentContext): orgjsonJSONObject;
						public static u(param0: androidcontentContext): number;
						public static a(param0: native.Array<number>): native.Array<number>;
						public static d(param0: androidcontentContext): androidutilDisplayMetrics;
						public static c(param0: androidcontentContext): string;
						public static e(param0: androidcontentContext): boolean;
						public static k(param0: androidcontentContext): javalangInteger;
						public static z(param0: androidcontentContext): boolean;
						public static a(): number;
						public static v(param0: androidcontentContext): void;
						public static a(param0: androidcontentContext, param1: number): void;
						public static f(param0: androidcontentContext): string;
						public static e(): number;
						public static x(param0: androidcontentContext): void;
						public static h(param0: androidcontentContext): string;
						public static j(param0: androidcontentContext): string;
						public static q(param0: androidcontentContext): javalangInteger;
						public static w(param0: androidcontentContext): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class m {
					}
				}
			}
		}
	}
}

import javaioFile = java.io.File;
/// <reference path="./java.io.File.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class n {
						public accept(param0: javaioFile): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class o {
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class p {
						public static a(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class q {
						public static a(param0: androidcontentContext, param1: string, param2: number): number;
						public static b(param0: androidcontentContext, param1: string, param2: string): void;
						public static a(param0: androidcontentContext, param1: string, param2: string): string;
						public static b(param0: androidcontentContext, param1: string, param2: number): void;
					}
				}
			}
		}
	}
}

import androidnetwifiWifiInfo = android.net.wifi.WifiInfo;
import orgjsonJSONArray = org.json.JSONArray;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.wifi.WifiInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module common {
					export class r {
						public static c(param0: androidcontentContext): androidnetwifiWifiInfo;
						public static b(param0: string): string;
						public static a(param0: androidcontentContext, param1: number): orgjsonJSONArray;
						public static e(param0: androidcontentContext): string;
						public static f(param0: androidcontentContext): boolean;
						public static d(param0: androidcontentContext): string;
						public static b(param0: androidcontentContext): string;
						public static a(param0: string): string;
						public static a(param0: androidcontentContext): string;
						public static a(param0: androidcontentContext, param1: string): boolean;
						public static a(param0: orgjsonJSONObject, param1: string, param2: string): void;
					}
				}
			}
		}
	}
}

import javautilTimerTask = java.util.TimerTask;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.util.TimerTask.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class d {
					public static a(param0: androidcontentContext): com.tencent.wxop.stat.d;
					public a(param0: javautilTimerTask, param1: number): void;
					public a(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class e {
					public run(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module event {
					export class EventType {
						public static PAGE_VIEW: com.tencent.wxop.stat.event.EventType;
						public static SESSION_ENV: com.tencent.wxop.stat.event.EventType;
						public static ERROR: com.tencent.wxop.stat.event.EventType;
						public static CUSTOM: com.tencent.wxop.stat.event.EventType;
						public static ADDITION: com.tencent.wxop.stat.event.EventType;
						public static MONITOR_STAT: com.tencent.wxop.stat.event.EventType;
						public static MTA_GAME_USER: com.tencent.wxop.stat.event.EventType;
						public static NETWORK_MONITOR: com.tencent.wxop.stat.event.EventType;
						public static NETWORK_DETECTOR: com.tencent.wxop.stat.event.EventType;
						public static values(): native.Array<com.tencent.wxop.stat.event.EventType>;
						public static valueOf(param0: string): com.tencent.wxop.stat.event.EventType;
						public a(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatAccount.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatSpecifyReportedInfo.d.ts" />
/// <reference path="./com.tencent.wxop.stat.event.EventType.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module event {
					export class a extends com.tencent.wxop.stat.event.e {
						public a(): com.tencent.wxop.stat.event.EventType;
						public constructor(param0: androidcontentContext, param1: number, param2: com.tencent.wxop.stat.StatAccount, param3: com.tencent.wxop.stat.StatSpecifyReportedInfo);
						public a(param0: orgjsonJSONObject): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatSpecifyReportedInfo.d.ts" />
/// <reference path="./com.tencent.wxop.stat.event.EventType.d.ts" />
/// <reference path="./com.tencent.wxop.stat.event.c.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module event {
					export class b extends com.tencent.wxop.stat.event.e {
						public a(): com.tencent.wxop.stat.event.EventType;
						public b(param0: orgjsonJSONObject): boolean;
						public constructor(param0: androidcontentContext, param1: number, param2: string, param3: com.tencent.wxop.stat.StatSpecifyReportedInfo);
						public a(param0: orgjsonJSONObject): boolean;
						public a(param0: number): void;
						public b(): com.tencent.wxop.stat.event.c;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Properties.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module event {
					export class c {
						public a: string;
						public b: orgjsonJSONArray;
						public c: orgjsonJSONObject;
						public constructor();
						public equals(param0: javalangObject): boolean;
						public constructor(param0: string, param1: native.Array<string>, param2: javautilProperties);
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatSpecifyReportedInfo.d.ts" />
/// <reference path="./com.tencent.wxop.stat.event.EventType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module event {
					export class d extends com.tencent.wxop.stat.event.e {
						public constructor(param0: androidcontentContext, param1: number, param2: number, param3: javalangThrowable, param4: com.tencent.wxop.stat.StatSpecifyReportedInfo);
						public a(): com.tencent.wxop.stat.event.EventType;
						public a(param0: orgjsonJSONObject): boolean;
						public constructor(param0: androidcontentContext, param1: number, param2: number, param3: javalangThrowable, param4: javalangThread, param5: com.tencent.wxop.stat.StatSpecifyReportedInfo);
						public constructor(param0: androidcontentContext, param1: number, param2: string, param3: number, param4: number, param5: javalangThread, param6: com.tencent.wxop.stat.StatSpecifyReportedInfo);
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatSpecifyReportedInfo.d.ts" />
/// <reference path="./com.tencent.wxop.stat.event.EventType.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module event {
					export abstract class e {
						public h: string;
						public i: string;
						public static j: string;
						public k: boolean;
						public l: androidcontentContext;
						public a(): com.tencent.wxop.stat.event.EventType;
						public c(): number;
						public b(param0: orgjsonJSONObject): boolean;
						public g(): string;
						public d(): com.tencent.wxop.stat.StatSpecifyReportedInfo;
						public a(param0: orgjsonJSONObject): boolean;
						public f(): boolean;
						public e(): androidcontentContext;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatGameUser.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatSpecifyReportedInfo.d.ts" />
/// <reference path="./com.tencent.wxop.stat.event.EventType.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module event {
					export class f extends com.tencent.wxop.stat.event.e {
						public a(): com.tencent.wxop.stat.event.EventType;
						public constructor(param0: androidcontentContext, param1: number, param2: com.tencent.wxop.stat.StatGameUser, param3: com.tencent.wxop.stat.StatSpecifyReportedInfo);
						public a(param0: orgjsonJSONObject): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatAppMonitor.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatSpecifyReportedInfo.d.ts" />
/// <reference path="./com.tencent.wxop.stat.event.EventType.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module event {
					export class g extends com.tencent.wxop.stat.event.e {
						public a(): com.tencent.wxop.stat.event.EventType;
						public constructor(param0: androidcontentContext, param1: number, param2: com.tencent.wxop.stat.StatAppMonitor, param3: com.tencent.wxop.stat.StatSpecifyReportedInfo);
						public a(param0: orgjsonJSONObject): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.event.EventType.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module event {
					export class h extends com.tencent.wxop.stat.event.e {
						public a(): com.tencent.wxop.stat.event.EventType;
						public constructor(param0: androidcontentContext);
						public a(param0: orgjsonJSONObject): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatSpecifyReportedInfo.d.ts" />
/// <reference path="./com.tencent.wxop.stat.event.EventType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module event {
					export class i extends com.tencent.wxop.stat.event.e {
						public a(): com.tencent.wxop.stat.event.EventType;
						public a(param0: string): void;
						public constructor(param0: androidcontentContext, param1: number, param2: com.tencent.wxop.stat.StatSpecifyReportedInfo);
						public a(param0: orgjsonJSONObject): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatSpecifyReportedInfo.d.ts" />
/// <reference path="./com.tencent.wxop.stat.event.EventType.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module event {
					export class j extends com.tencent.wxop.stat.event.e {
						public constructor(param0: androidcontentContext, param1: string, param2: string, param3: number, param4: javalangLong, param5: com.tencent.wxop.stat.StatSpecifyReportedInfo);
						public a(): com.tencent.wxop.stat.event.EventType;
						public a(param0: orgjsonJSONObject): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.tencent.wxop.stat.StatSpecifyReportedInfo.d.ts" />
/// <reference path="./com.tencent.wxop.stat.event.EventType.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export module event {
					export class k extends com.tencent.wxop.stat.event.e {
						public a(): com.tencent.wxop.stat.event.EventType;
						public constructor(param0: androidcontentContext, param1: number, param2: orgjsonJSONObject, param3: com.tencent.wxop.stat.StatSpecifyReportedInfo);
						public a(param0: orgjsonJSONObject): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class f {
					public constructor(param0: number);
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class g {
					/**
					 * Constructs a new instance of the com.tencent.wxop.stat.g interface with the provided implementation.
					 */
					public constructor(implementation: {
						a(param0: javalangObject): void;
						b(param0: javalangObject): void;
						c(param0: javalangObject): void;
						d(param0: javalangObject): void;
						e(param0: javalangObject): void;
					});
					public e(param0: javalangObject): void;
					public d(param0: javalangObject): void;
					public c(param0: javalangObject): void;
					public b(param0: javalangObject): void;
					public a(param0: javalangObject): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class h {
					/**
					 * Constructs a new instance of the com.tencent.wxop.stat.h interface with the provided implementation.
					 */
					public constructor(implementation: {
						a(): void;
						b(): void;
					});
					public b(): void;
					public a(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class i {
				}
			}
		}
	}
}

import orgapachehttpHttpResponse = org.apache.http.HttpResponse;
import orgapachehttpprotocolHttpContext = org.apache.http.protocol.HttpContext;
/// <reference path="./org.apache.http.HttpResponse.d.ts" />
/// <reference path="./org.apache.http.protocol.HttpContext.d.ts" />
declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class j {
					public getKeepAliveDuration(param0: orgapachehttpHttpResponse, param1: orgapachehttpprotocolHttpContext): number;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class k {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class l {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class m {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class n {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class o {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class p {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class q {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class r {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class s {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class t {
					public b(): void;
					public a(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class u {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class v {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class w {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class x {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class y {
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module tencent {
		export module wxop {
			export module stat {
				export class z {
					public run(): void;
				}
			}
		}
	}
}

