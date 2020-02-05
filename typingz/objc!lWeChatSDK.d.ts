
declare class AddCardToWXCardPackageReq extends BaseReq {

	static alloc(): AddCardToWXCardPackageReq; // inherited from NSObject

	static new(): AddCardToWXCardPackageReq; // inherited from NSObject

	cardAry: NSArray<any>;
}

declare class AddCardToWXCardPackageResp extends BaseResp {

	static alloc(): AddCardToWXCardPackageResp; // inherited from NSObject

	static new(): AddCardToWXCardPackageResp; // inherited from NSObject

	cardAry: NSArray<any>;
}

declare const enum AuthErrCode {

	WechatAuth_Err_Ok = 0,

	WechatAuth_Err_NormalErr = -1,

	WechatAuth_Err_NetworkErr = -2,

	WechatAuth_Err_GetQrcodeFailed = -3,

	WechatAuth_Err_Cancel = -4,

	WechatAuth_Err_Timeout = -5
}

declare class BaseReq extends NSObject {

	static alloc(): BaseReq; // inherited from NSObject

	static new(): BaseReq; // inherited from NSObject

	openID: string;

	type: number;
}

declare class BaseResp extends NSObject {

	static alloc(): BaseResp; // inherited from NSObject

	static new(): BaseResp; // inherited from NSObject

	errCode: number;

	errStr: string;

	type: number;
}

declare class GetMessageFromWXReq extends BaseReq {

	static alloc(): GetMessageFromWXReq; // inherited from NSObject

	static new(): GetMessageFromWXReq; // inherited from NSObject

	country: string;

	lang: string;
}

declare class GetMessageFromWXResp extends BaseResp {

	static alloc(): GetMessageFromWXResp; // inherited from NSObject

	static new(): GetMessageFromWXResp; // inherited from NSObject

	bText: boolean;

	message: WXMediaMessage;

	text: string;
}

declare class LaunchFromWXReq extends BaseReq {

	static alloc(): LaunchFromWXReq; // inherited from NSObject

	static new(): LaunchFromWXReq; // inherited from NSObject

	country: string;

	lang: string;

	message: WXMediaMessage;
}

declare class OpenRankListReq extends BaseReq {

	static alloc(): OpenRankListReq; // inherited from NSObject

	static new(): OpenRankListReq; // inherited from NSObject
}

declare class OpenRankListResp extends BaseResp {

	static alloc(): OpenRankListResp; // inherited from NSObject

	static new(): OpenRankListResp; // inherited from NSObject
}

declare class OpenWebviewReq extends BaseReq {

	static alloc(): OpenWebviewReq; // inherited from NSObject

	static new(): OpenWebviewReq; // inherited from NSObject

	url: string;
}

declare class OpenWebviewResp extends BaseResp {

	static alloc(): OpenWebviewResp; // inherited from NSObject

	static new(): OpenWebviewResp; // inherited from NSObject
}

declare class SendAuthReq extends BaseReq {

	static alloc(): SendAuthReq; // inherited from NSObject

	static new(): SendAuthReq; // inherited from NSObject

	scope: string;

	state: string;
}

declare class SendAuthResp extends BaseResp {

	static alloc(): SendAuthResp; // inherited from NSObject

	static new(): SendAuthResp; // inherited from NSObject

	code: string;

	country: string;

	lang: string;

	state: string;
}

declare class SendMessageToWXReq extends BaseReq {

	static alloc(): SendMessageToWXReq; // inherited from NSObject

	static new(): SendMessageToWXReq; // inherited from NSObject

	bText: boolean;

	message: WXMediaMessage;

	scene: number;

	text: string;

	toUserOpenId: string;
}

declare class SendMessageToWXResp extends BaseResp {

	static alloc(): SendMessageToWXResp; // inherited from NSObject

	static new(): SendMessageToWXResp; // inherited from NSObject

	country: string;

	lang: string;
}

declare class ShowMessageFromWXReq extends BaseReq {

	static alloc(): ShowMessageFromWXReq; // inherited from NSObject

	static new(): ShowMessageFromWXReq; // inherited from NSObject

	country: string;

	lang: string;

	message: WXMediaMessage;
}

declare class ShowMessageFromWXResp extends BaseResp {

	static alloc(): ShowMessageFromWXResp; // inherited from NSObject

	static new(): ShowMessageFromWXResp; // inherited from NSObject
}

declare const enum WXAPISupport {

	Session = 0
}

declare class WXApi extends NSObject {

	static alloc(): WXApi; // inherited from NSObject

	static getApiVersion(): string;

	static getWXAppInstallUrl(): string;

	static handleOpenURLDelegate(url: NSURL, delegate: WXApiDelegate): boolean;

	static handleOpenUniversalLinkDelegate(userActivity: NSUserActivity, delegate: WXApiDelegate): boolean;

	static isWXAppInstalled(): boolean;

	static isWXAppSupportApi(): boolean;

	static new(): WXApi; // inherited from NSObject

	static openWXApp(): boolean;

	static registerAppUniversalLink(appid: string, universalLink: string): boolean;

	static sendAuthReqViewControllerDelegateCompletion(req: SendAuthReq, viewController: UIViewController, delegate: WXApiDelegate, completion: (p1: boolean) => void): void;

	static sendReqCompletion(req: BaseReq, completion: (p1: boolean) => void): void;

	static sendRespCompletion(resp: BaseResp, completion: (p1: boolean) => void): void;

	static startLogByLevelLogBlock(level: WXLogLevel, logBlock: (p1: string) => void): void;

	static startLogByLevelLogDelegate(level: WXLogLevel, logDelegate: WXApiLogDelegate): void;

	static stopLog(): void;
}

interface WXApiDelegate extends NSObjectProtocol {

	onReq?(req: BaseReq): void;

	onResp?(resp: BaseResp): void;
}
declare var WXApiDelegate: {

	prototype: WXApiDelegate;
};

interface WXApiLogDelegate extends NSObjectProtocol {

	onLogLogLevel(log: string, level: WXLogLevel): void;
}
declare var WXApiLogDelegate: {

	prototype: WXApiLogDelegate;
};

declare class WXAppExtendObject extends NSObject {

	static alloc(): WXAppExtendObject; // inherited from NSObject

	static new(): WXAppExtendObject; // inherited from NSObject

	static object(): WXAppExtendObject;

	extInfo: string;

	fileData: NSData;

	url: string;
}

declare const enum WXBizProfileType {

	Normal = 0,

	Device = 1
}

declare class WXCardItem extends NSObject {

	static alloc(): WXCardItem; // inherited from NSObject

	static new(): WXCardItem; // inherited from NSObject

	appID: string;

	cardId: string;

	cardState: number;

	encryptCode: string;

	extMsg: string;
}

declare class WXChooseCardReq extends BaseReq {

	static alloc(): WXChooseCardReq; // inherited from NSObject

	static new(): WXChooseCardReq; // inherited from NSObject

	appID: string;

	canMultiSelect: number;

	cardSign: string;

	cardTpID: string;

	cardType: string;

	nonceStr: string;

	shopID: number;

	signType: string;

	timeStamp: number;
}

declare class WXChooseCardResp extends BaseResp {

	static alloc(): WXChooseCardResp; // inherited from NSObject

	static new(): WXChooseCardResp; // inherited from NSObject

	cardAry: NSArray<any>;
}

declare class WXChooseInvoiceReq extends BaseReq {

	static alloc(): WXChooseInvoiceReq; // inherited from NSObject

	static new(): WXChooseInvoiceReq; // inherited from NSObject

	appID: string;

	cardSign: string;

	nonceStr: string;

	shopID: number;

	signType: string;

	timeStamp: number;
}

declare class WXChooseInvoiceResp extends BaseResp {

	static alloc(): WXChooseInvoiceResp; // inherited from NSObject

	static new(): WXChooseInvoiceResp; // inherited from NSObject

	cardAry: NSArray<any>;
}

declare class WXEmoticonObject extends NSObject {

	static alloc(): WXEmoticonObject; // inherited from NSObject

	static new(): WXEmoticonObject; // inherited from NSObject

	static object(): WXEmoticonObject;

	emoticonData: NSData;
}

declare const enum WXErrCode {

	Success = 0,

	ErrCodeCommon = -1,

	ErrCodeUserCancel = -2,

	ErrCodeSentFail = -3,

	ErrCodeAuthDeny = -4,

	ErrCodeUnsupport = -5
}

declare class WXFileObject extends NSObject {

	static alloc(): WXFileObject; // inherited from NSObject

	static new(): WXFileObject; // inherited from NSObject

	static object(): WXFileObject;

	fileData: NSData;

	fileExtension: string;
}

declare class WXImageObject extends NSObject {

	static alloc(): WXImageObject; // inherited from NSObject

	static new(): WXImageObject; // inherited from NSObject

	static object(): WXImageObject;

	imageData: NSData;
}

declare class WXInvoiceAuthInsertReq extends BaseReq {

	static alloc(): WXInvoiceAuthInsertReq; // inherited from NSObject

	static new(): WXInvoiceAuthInsertReq; // inherited from NSObject

	urlString: string;
}

declare class WXInvoiceAuthInsertResp extends BaseResp {

	static alloc(): WXInvoiceAuthInsertResp; // inherited from NSObject

	static new(): WXInvoiceAuthInsertResp; // inherited from NSObject

	wxOrderId: string;
}

declare class WXInvoiceItem extends NSObject {

	static alloc(): WXInvoiceItem; // inherited from NSObject

	static new(): WXInvoiceItem; // inherited from NSObject

	appID: string;

	cardId: string;

	cardState: number;

	encryptCode: string;

	extMsg: string;
}

declare class WXLaunchMiniProgramReq extends BaseReq {

	static alloc(): WXLaunchMiniProgramReq; // inherited from NSObject

	static new(): WXLaunchMiniProgramReq; // inherited from NSObject

	static object(): WXLaunchMiniProgramReq;

	extDic: NSDictionary<any, any>;

	extMsg: string;

	miniProgramType: WXMiniProgramType;

	path: string;

	userName: string;
}

declare class WXLaunchMiniProgramResp extends BaseResp {

	static alloc(): WXLaunchMiniProgramResp; // inherited from NSObject

	static new(): WXLaunchMiniProgramResp; // inherited from NSObject

	extMsg: string;
}

declare class WXLocationObject extends NSObject {

	static alloc(): WXLocationObject; // inherited from NSObject

	static new(): WXLocationObject; // inherited from NSObject

	static object(): WXLocationObject;

	lat: number;

	lng: number;
}

declare const enum WXLogLevel {

	Normal = 0,

	Detail = 1
}

declare const enum WXMPWebviewType {

	Ad = 0
}

declare class WXMediaMessage extends NSObject {

	static alloc(): WXMediaMessage; // inherited from NSObject

	static message(): WXMediaMessage;

	static new(): WXMediaMessage; // inherited from NSObject

	description: string;

	mediaObject: any;

	mediaTagName: string;

	messageAction: string;

	messageExt: string;

	thumbData: NSData;

	title: string;

	setThumbImage(image: UIImage): void;
}

declare class WXMiniProgramObject extends NSObject {

	static alloc(): WXMiniProgramObject; // inherited from NSObject

	static new(): WXMiniProgramObject; // inherited from NSObject

	static object(): WXMiniProgramObject;

	disableForward: boolean;

	hdImageData: NSData;

	miniProgramType: WXMiniProgramType;

	path: string;

	userName: string;

	webpageUrl: string;

	withShareTicket: boolean;
}

declare const enum WXMiniProgramType {

	Release = 0,

	Test = 1,

	Preview = 2
}

declare class WXMusicObject extends NSObject {

	static alloc(): WXMusicObject; // inherited from NSObject

	static new(): WXMusicObject; // inherited from NSObject

	static object(): WXMusicObject;

	musicDataUrl: string;

	musicLowBandDataUrl: string;

	musicLowBandUrl: string;

	musicUrl: string;

	songAlbumUrl: string;

	songLyric: string;
}

declare class WXOpenBusinessViewReq extends BaseReq {

	static alloc(): WXOpenBusinessViewReq; // inherited from NSObject

	static new(): WXOpenBusinessViewReq; // inherited from NSObject

	static object(): WXOpenBusinessViewReq;

	businessType: string;

	extData: NSData;

	extInfo: string;

	query: string;
}

declare class WXOpenBusinessViewResp extends BaseResp {

	static alloc(): WXOpenBusinessViewResp; // inherited from NSObject

	static new(): WXOpenBusinessViewResp; // inherited from NSObject

	businessType: string;

	extMsg: string;
}

declare class WXOpenBusinessWebViewReq extends BaseReq {

	static alloc(): WXOpenBusinessWebViewReq; // inherited from NSObject

	static new(): WXOpenBusinessWebViewReq; // inherited from NSObject

	businessType: number;

	queryInfoDic: NSDictionary<any, any>;
}

declare class WXOpenBusinessWebViewResp extends BaseResp {

	static alloc(): WXOpenBusinessWebViewResp; // inherited from NSObject

	static new(): WXOpenBusinessWebViewResp; // inherited from NSObject

	businessType: number;

	result: string;
}

declare const enum WXScene {

	Session = 0,

	Timeline = 1,

	Favorite = 2,

	SpecifiedSession = 3
}

declare class WXSubscribeMiniProgramMsgReq extends BaseReq {

	static alloc(): WXSubscribeMiniProgramMsgReq; // inherited from NSObject

	static new(): WXSubscribeMiniProgramMsgReq; // inherited from NSObject

	miniProgramAppid: string;
}

declare class WXSubscribeMiniProgramMsgResp extends BaseResp {

	static alloc(): WXSubscribeMiniProgramMsgResp; // inherited from NSObject

	static new(): WXSubscribeMiniProgramMsgResp; // inherited from NSObject

	nickName: string;

	openId: string;

	unionId: string;
}

declare class WXSubscribeMsgReq extends BaseReq {

	static alloc(): WXSubscribeMsgReq; // inherited from NSObject

	static new(): WXSubscribeMsgReq; // inherited from NSObject

	reserved: string;

	scene: number;

	templateId: string;
}

declare class WXSubscribeMsgResp extends BaseResp {

	static alloc(): WXSubscribeMsgResp; // inherited from NSObject

	static new(): WXSubscribeMsgResp; // inherited from NSObject

	action: string;

	openId: string;

	reserved: string;

	scene: number;

	templateId: string;
}

declare class WXTextObject extends NSObject {

	static alloc(): WXTextObject; // inherited from NSObject

	static new(): WXTextObject; // inherited from NSObject

	static object(): WXTextObject;

	contentText: string;
}

declare class WXVideoObject extends NSObject {

	static alloc(): WXVideoObject; // inherited from NSObject

	static new(): WXVideoObject; // inherited from NSObject

	static object(): WXVideoObject;

	videoLowBandUrl: string;

	videoUrl: string;
}

declare class WXWebpageObject extends NSObject {

	static alloc(): WXWebpageObject; // inherited from NSObject

	static new(): WXWebpageObject; // inherited from NSObject

	static object(): WXWebpageObject;

	webpageUrl: string;
}

interface WechatAuthAPIDelegate extends NSObjectProtocol {

	onAuthFinishAuthCode?(errCode: number, authCode: string): void;

	onAuthGotQrcode?(image: UIImage): void;

	onQrcodeScanned?(): void;
}
declare var WechatAuthAPIDelegate: {

	prototype: WechatAuthAPIDelegate;
};

declare class WechatAuthSDK extends NSObject {

	static alloc(): WechatAuthSDK; // inherited from NSObject

	static new(): WechatAuthSDK; // inherited from NSObject

	delegate: WechatAuthAPIDelegate;

	readonly sdkVersion: string;

	AuthNonceStrTimeStampScopeSignatureSchemeData(appId: string, nonceStr: string, timeStamp: string, scope: string, signature: string, schemeData: string): boolean;

	StopAuth(): boolean;
}
