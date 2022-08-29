// To parse this data:
//
//   import { Convert, Upcoming } from "./file";
//
//   const upcoming = Convert.toUpcoming(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Upcoming {
    pages: Pages;
    objects: Object[];
}

export interface Object {
    id: string;
    channelId: string;
    channelName: string;
    marketplace: Marketplace;
    language: string;
    lastFetchTime: Date;
    publishedContent: PublishedContent;
    productInfo: ProductInfo[];
    search: Search;
    collectionTermIds: any[];
    resourceType: string;
    links: ObjectLinks;
    collectionsv2: Collectionsv2;
}

export interface Collectionsv2 {
    groupedCollectionTermIds: GroupedCollectionTermIDS;
    collectionTermIds: any[];
}

export interface GroupedCollectionTermIDS {
}

export interface ObjectLinks {
    self: Self;
}

export interface Self {
    ref: string;
}

export enum Marketplace {
    Cz = "CZ",
}

export interface ProductInfo {
    merchProduct: MerchProduct;
    merchPrice: MerchPrice;
    availability: Availability;
    launchView: LaunchView;
    productContent: ProductContent;
    skus: Skus[];
    availableGtins: AvailableGtin[];
    socialInterest: SocialInterest;
}

export interface Availability {
    id: string;
    productId: string;
    resourceType: string;
    links: ObjectLinks;
    available: boolean;
}

export interface AvailableGtin {
    gtin: string;
    method: Method;
    level: Level;
    available: boolean;
    styleColor: StyleColor;
    styleType: StyleType;
    locationId: LocationID;
}

export enum Level {
    High = "HIGH",
    Low = "LOW",
    Medium = "MEDIUM",
    Oos = "OOS",
}

export interface LocationID {
    id: MerchGroup;
    type: LocationIDType;
}

export enum MerchGroup {
    Eu = "EU",
}

export enum LocationIDType {
    MerchGroup = "merchGroup",
}

export enum Method {
    Ship = "SHIP",
}

export enum StyleColor {
    Da6672700 = "DA6672-700",
    Dm8019200 = "DM8019-200",
    Dm8019700 = "DM8019-700",
    Do8727100 = "DO8727-100",
    Do9334100 = "DO9334-100",
    Dq0299100 = "DQ0299-100",
}

export enum StyleType {
    Inline = "INLINE",
}

export interface LaunchView {
    id: string;
    resourceType: string;
    productId: string;
    method: string;
    paymentMethod: string;
    startEntryDate: Date;
    links: ObjectLinks;
    stopEntryDate?: Date;
    delayConsumerVisibilityUntil?: Date;
}

export interface MerchPrice {
    id: string;
    snapshotId: string;
    productId: string;
    parentId: string;
    parentType: Type;
    modificationDate: Date;
    country: Marketplace;
    msrp: number;
    fullPrice: number;
    currentPrice: number;
    currency: string;
    discounted: boolean;
    promoInclusions: string[];
    promoExclusions: string[];
    resourceType: string;
    links: ObjectLinks;
}

export enum Type {
    MerchProduct = "merchProduct",
}

export interface MerchProduct {
    id: string;
    snapshotId: string;
    modificationDate: Date;
    status: string;
    merchGroup: MerchGroup;
    styleCode: string;
    colorCode: string;
    styleColor: StyleColor;
    pid: string;
    catalogId: string;
    productGroupId: string;
    brand: string;
    channels: Channel[];
    consumerChannels: ConsumerChannel[];
    legacyCatalogIds: string[];
    genders: string[];
    sizeConverterId: string;
    sizeGuideId: string;
    valueAddedServices: ValueAddedService[];
    sportTags: string[];
    classificationConcepts: any[];
    taxonomyAttributes: TaxonomyAttribute[];
    commerceCountryInclusions: any[];
    commerceCountryExclusions: CommerceCountryExclusion[];
    abTestValues: any[];
    productRollup: ProductRollup;
    quantityLimit: number;
    styleType: StyleType;
    productType: string;
    publishType: string;
    mainColor: boolean;
    isImageAvailable: boolean;
    isCopyAvailable: boolean;
    isAttributionApproved: boolean;
    isAppleWatch: boolean;
    exclusiveAccess: boolean;
    hardLaunch: boolean;
    hideFromCSR: boolean;
    commercePublishDate: Date;
    commerceStartDate: Date;
    softLaunchDate?: Date;
    isPromoExclusionMessage: boolean;
    limitRetailExperience: LimitRetailExperience[];
    resourceType: Type;
    links: ObjectLinks;
    isCustomsApproved: boolean;
    inventoryShareOff?: boolean;
    hideFromSearch?: boolean;
}

export enum Channel {
    NikeStoreExperiences = "Nike Store Experiences",
    Snkrs = "SNKRS",
}

export enum CommerceCountryExclusion {
    Ru = "RU",
    Tr = "TR",
}

export interface ConsumerChannel {
    id: string;
    resourceType: ConsumerChannelResourceType;
}

export enum ConsumerChannelResourceType {
    GlobalizationConsumerChannels = "globalization/consumer_channels",
}

export interface LimitRetailExperience {
    value: Value;
    disabledStoreOfferingCodes: string[];
}

export enum Value {
    NikeAppSelfCheckout = "Nike App Self-Checkout",
    ScanToLearn = "Scan to Learn",
    ScanToTry = "Scan to Try",
}

export interface ProductRollup {
    type: string;
    key: string;
}

export interface TaxonomyAttribute {
    resourceType: string;
    ids: string[];
}

export interface ValueAddedService {
    id: string;
    vasType: VasType;
}

export enum VasType {
    GiftMessage = "GIFT_MESSAGE",
    GiftWrap = "GIFT_WRAP",
}

export interface ProductContent {
    globalPid: string;
    langLocale: string;
    colorDescription: string;
    slug: string;
    fullTitle: string;
    title: string;
    subtitle: string;
    descriptionHeading: string;
    description: string;
    techSpec: string;
    manufacturingCountriesOfOrigin: any[];
    colors: Color[];
    bestFor: any[];
    athletes: any[];
    widths: Width[];
}

export interface Color {
    type: ColorType;
    name: string;
    hex?: string;
}

export enum ColorType {
    Logo = "LOGO",
    Primary = "PRIMARY",
    Secondary = "SECONDARY",
    Simple = "SIMPLE",
    Tertiary = "TERTIARY",
}

export interface Width {
    value: string;
    localizedValue: string;
}

export interface Skus {
    id: string;
    snapshotId: string;
    productId: string;
    parentId: string;
    parentType: Type;
    modificationDate: Date;
    merchGroup: MerchGroup;
    stockKeepingUnitId: string;
    gtin: string;
    nikeSize: string;
    sizeConversionId: string;
    countrySpecifications: CountrySpecification[];
    resourceType: SkusResourceType;
    vatCode: string;
    links: ObjectLinks;
}

export interface CountrySpecification {
    country: Marketplace;
    localizedSize: string;
    localizedSizePrefix: MerchGroup;
    taxInfo: TaxInfo;
}

export interface TaxInfo {
    vat: number;
}

export enum SkusResourceType {
    MerchSku = "merchSku",
}

export interface SocialInterest {
    id: string;
}

export interface PublishedContent {
    preview: boolean;
    externalReferences: any[];
    marketplace: Marketplace;
    collectionGroupId: string;
    createdDateTime: Date;
    language: string;
    viewStartDate: Date;
    type: string;
    version: string;
    analytics: Analytics;
    nodes: PublishedContentNode[];
    payloadType: string;
    publishStartDate: Date;
    supportedLanguages: any[];
    publishEndDate: Date;
    subType: string;
    links: PublishedContentLinks;
    id: string;
    properties: PublishedContentProperties;
    resourceType: string;
}

export interface Analytics {
    hashKey: string;
}

export interface PublishedContentLinks {
    self: string;
}

export interface PublishedContentNode {
    analytics: Analytics;
    nodes?: NodeNode[];
    subType: SubTypeEnum;
    id: string;
    type: PurpleType;
    version: string;
    properties: FluffyProperties;
}

export interface NodeNode {
    analytics: Analytics;
    subType: SubTypeEnum;
    id: string;
    type: PurpleType;
    version: string;
    properties: PurpleProperties;
}

export interface PurpleProperties {
    portraitId: string;
    squarishURL: string;
    product: any[];
    landscapeId: string;
    altText: string;
    portraitURL: string;
    landscapeURL: string;
    portrait: Landscape;
    squarish: Landscape;
    title: string;
    squarishId: string;
    copyId: CopyID;
    imageCaption: string;
    richTextLinks: any[];
    subtitle: string;
    colorTheme: ColorTheme;
    secondaryPortrait: SecondaryPortrait;
    style: Style;
    actions: any[];
    landscape: Landscape;
    custom?: GroupedCollectionTermIDS;
}

export enum ColorTheme {
    Dark = "dark",
    Light = "light",
}

export enum CopyID {
    Bf21A9E8Fbc5A3846Fb05B4Fa0859E0917B2202F = "bf21a9e8fbc5a3846fb05b4fa0859e0917b2202f",
}

export interface Landscape {
    aspectRatio?: number;
    id: string;
    type?: ThreadTypeEnum;
    url?: string;
    view?: string;
}

export enum ThreadTypeEnum {
    Editorial = "editorial",
    Product = "product",
}

export interface SecondaryPortrait {
    url?: string;
    id?: string;
}

export interface Style {
    defaultStyle: GroupedCollectionTermIDS;
    modifiedDate: Date;
    exposeTemplate: boolean;
    properties: StyleProperties;
    resourceType: StyleResourceType;
}

export interface StyleProperties {
    actions: GroupedCollectionTermIDS;
}

export enum StyleResourceType {
    ContentStyle = "content/style",
}

export enum SubTypeEnum {
    Carousel = "carousel",
    Image = "image",
    Text = "text",
}

export enum PurpleType {
    Card = "card",
}

export interface FluffyProperties {
    product: any[];
    containerType?: string;
    custom: GroupedCollectionTermIDS;
    jsonBody?: JSONBody;
    body?: string;
    title: string;
    speed?: number;
    copyId: string;
    loop?: boolean;
    richTextLinks: any[];
    subtitle: string;
    colorTheme: ColorTheme;
    style: Style;
    autoPlay?: boolean;
    actions: Action[];
    portraitId?: string;
    squarishURL?: string;
    landscapeId?: string;
    altText?: string;
    portraitURL?: string;
    landscapeURL?: string;
    portrait?: Landscape;
    squarish?: Landscape;
    squarishId?: string;
    imageCaption?: string;
    secondaryPortrait?: SecondaryPortrait;
    landscape?: Landscape;
    internalName?: string;
}

export interface Action {
    analytics: Analytics;
    actionType: string;
    product: DestinationProduct;
    destination: Destination;
    id: string;
    destinationId: StyleColor;
}

export interface Destination {
    product: DestinationProduct;
    type: string;
}

export interface DestinationProduct {
    productId: string;
    styleColor: StyleColor;
    threadId?: string;
}

export interface JSONBody {
    type: JSONBodyType;
    content: JSONBodyContent[];
}

export interface JSONBodyContent {
    type: FluffyType;
    content: ContentContent[];
}

export interface ContentContent {
    text: string;
    type: SubTypeEnum;
}

export enum FluffyType {
    Paragraph = "paragraph",
}

export enum JSONBodyType {
    Doc = "doc",
}

export interface PublishedContentProperties {
    custom: Custom;
    subtitle: string;
    publish: Publish;
    threadType: ThreadTypeEnum;
    title: string;
    seo: SEO;
    coverCard: CoverCard;
    products: ProductElement[];
    social?: Social;
}

export interface CoverCard {
    analytics: Analytics;
    subType: SubTypeEnum;
    id: string;
    type: PurpleType;
    version: string;
    properties: CoverCardProperties;
}

export interface CoverCardProperties {
    portraitId: string;
    squarishURL: string;
    product: any[];
    landscapeId: string;
    altText: string;
    portraitURL: string;
    custom: GroupedCollectionTermIDS;
    landscapeURL: string;
    portrait: Landscape;
    squarish: Landscape;
    title: string;
    squarishId: string;
    copyId: string;
    imageCaption: string;
    richTextLinks: any[];
    subtitle: string;
    colorTheme: ColorTheme;
    secondaryPortrait: SocialInterest;
    style: Style;
    actions: any[];
    landscape: Landscape;
}

export interface Custom {
    hideFromUpcoming?: any[];
}

export interface ProductElement {
    productId: string;
    styleColor: StyleColor;
}

export interface Publish {
    collectionGroups: string[];
    collections: string[];
    countries: string[];
    pageId: string;
}

export interface SEO {
    keywords: string;
    description: string;
    doNotIndex: boolean;
    title: string;
    slug: string;
}

export interface Social {
    comments: boolean;
    share: boolean;
    likes: boolean;
}

export interface Search {
    conceptIds: string[];
}

export interface Pages {
    prev: string;
    next: string;
    totalPages: number;
    totalResources: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toUpcoming(json: string): Upcoming {
        return cast(JSON.parse(json), r("Upcoming"));
    }

    public static upcomingToJson(value: Upcoming): string {
        return JSON.stringify(uncast(value, r("Upcoming")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`,);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) { }
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Upcoming": o([
        { json: "pages", js: "pages", typ: r("Pages") },
        { json: "objects", js: "objects", typ: a(r("Object")) },
    ], false),
    "Object": o([
        { json: "id", js: "id", typ: "" },
        { json: "channelId", js: "channelId", typ: "" },
        { json: "channelName", js: "channelName", typ: "" },
        { json: "marketplace", js: "marketplace", typ: r("Marketplace") },
        { json: "language", js: "language", typ: "" },
        { json: "lastFetchTime", js: "lastFetchTime", typ: Date },
        { json: "publishedContent", js: "publishedContent", typ: r("PublishedContent") },
        { json: "productInfo", js: "productInfo", typ: a(r("ProductInfo")) },
        { json: "search", js: "search", typ: r("Search") },
        { json: "collectionTermIds", js: "collectionTermIds", typ: a("any") },
        { json: "resourceType", js: "resourceType", typ: "" },
        { json: "links", js: "links", typ: r("ObjectLinks") },
        { json: "collectionsv2", js: "collectionsv2", typ: r("Collectionsv2") },
    ], false),
    "Collectionsv2": o([
        { json: "groupedCollectionTermIds", js: "groupedCollectionTermIds", typ: r("GroupedCollectionTermIDS") },
        { json: "collectionTermIds", js: "collectionTermIds", typ: a("any") },
    ], false),
    "GroupedCollectionTermIDS": o([
    ], false),
    "ObjectLinks": o([
        { json: "self", js: "self", typ: r("Self") },
    ], false),
    "Self": o([
        { json: "ref", js: "ref", typ: "" },
    ], false),
    "ProductInfo": o([
        { json: "merchProduct", js: "merchProduct", typ: r("MerchProduct") },
        { json: "merchPrice", js: "merchPrice", typ: r("MerchPrice") },
        { json: "availability", js: "availability", typ: r("Availability") },
        { json: "launchView", js: "launchView", typ: r("LaunchView") },
        { json: "productContent", js: "productContent", typ: r("ProductContent") },
        { json: "skus", js: "skus", typ: a(r("Skus")) },
        { json: "availableGtins", js: "availableGtins", typ: a(r("AvailableGtin")) },
        { json: "socialInterest", js: "socialInterest", typ: r("SocialInterest") },
    ], false),
    "Availability": o([
        { json: "id", js: "id", typ: "" },
        { json: "productId", js: "productId", typ: "" },
        { json: "resourceType", js: "resourceType", typ: "" },
        { json: "links", js: "links", typ: r("ObjectLinks") },
        { json: "available", js: "available", typ: true },
    ], false),
    "AvailableGtin": o([
        { json: "gtin", js: "gtin", typ: "" },
        { json: "method", js: "method", typ: r("Method") },
        { json: "level", js: "level", typ: r("Level") },
        { json: "available", js: "available", typ: true },
        { json: "styleColor", js: "styleColor", typ: r("StyleColor") },
        { json: "styleType", js: "styleType", typ: r("StyleType") },
        { json: "locationId", js: "locationId", typ: r("LocationID") },
    ], false),
    "LocationID": o([
        { json: "id", js: "id", typ: r("MerchGroup") },
        { json: "type", js: "type", typ: r("LocationIDType") },
    ], false),
    "LaunchView": o([
        { json: "id", js: "id", typ: "" },
        { json: "resourceType", js: "resourceType", typ: "" },
        { json: "productId", js: "productId", typ: "" },
        { json: "method", js: "method", typ: "" },
        { json: "paymentMethod", js: "paymentMethod", typ: "" },
        { json: "startEntryDate", js: "startEntryDate", typ: Date },
        { json: "links", js: "links", typ: r("ObjectLinks") },
        { json: "stopEntryDate", js: "stopEntryDate", typ: u(undefined, Date) },
        { json: "delayConsumerVisibilityUntil", js: "delayConsumerVisibilityUntil", typ: u(undefined, Date) },
    ], false),
    "MerchPrice": o([
        { json: "id", js: "id", typ: "" },
        { json: "snapshotId", js: "snapshotId", typ: "" },
        { json: "productId", js: "productId", typ: "" },
        { json: "parentId", js: "parentId", typ: "" },
        { json: "parentType", js: "parentType", typ: r("Type") },
        { json: "modificationDate", js: "modificationDate", typ: Date },
        { json: "country", js: "country", typ: r("Marketplace") },
        { json: "msrp", js: "msrp", typ: 3.14 },
        { json: "fullPrice", js: "fullPrice", typ: 3.14 },
        { json: "currentPrice", js: "currentPrice", typ: 3.14 },
        { json: "currency", js: "currency", typ: "" },
        { json: "discounted", js: "discounted", typ: true },
        { json: "promoInclusions", js: "promoInclusions", typ: a("") },
        { json: "promoExclusions", js: "promoExclusions", typ: a("") },
        { json: "resourceType", js: "resourceType", typ: "" },
        { json: "links", js: "links", typ: r("ObjectLinks") },
    ], false),
    "MerchProduct": o([
        { json: "id", js: "id", typ: "" },
        { json: "snapshotId", js: "snapshotId", typ: "" },
        { json: "modificationDate", js: "modificationDate", typ: Date },
        { json: "status", js: "status", typ: "" },
        { json: "merchGroup", js: "merchGroup", typ: r("MerchGroup") },
        { json: "styleCode", js: "styleCode", typ: "" },
        { json: "colorCode", js: "colorCode", typ: "" },
        { json: "styleColor", js: "styleColor", typ: r("StyleColor") },
        { json: "pid", js: "pid", typ: "" },
        { json: "catalogId", js: "catalogId", typ: "" },
        { json: "productGroupId", js: "productGroupId", typ: "" },
        { json: "brand", js: "brand", typ: "" },
        { json: "channels", js: "channels", typ: a(r("Channel")) },
        { json: "consumerChannels", js: "consumerChannels", typ: a(r("ConsumerChannel")) },
        { json: "legacyCatalogIds", js: "legacyCatalogIds", typ: a("") },
        { json: "genders", js: "genders", typ: a("") },
        { json: "sizeConverterId", js: "sizeConverterId", typ: "" },
        { json: "sizeGuideId", js: "sizeGuideId", typ: "" },
        { json: "valueAddedServices", js: "valueAddedServices", typ: a(r("ValueAddedService")) },
        { json: "sportTags", js: "sportTags", typ: a("") },
        { json: "classificationConcepts", js: "classificationConcepts", typ: a("any") },
        { json: "taxonomyAttributes", js: "taxonomyAttributes", typ: a(r("TaxonomyAttribute")) },
        { json: "commerceCountryInclusions", js: "commerceCountryInclusions", typ: a("any") },
        { json: "commerceCountryExclusions", js: "commerceCountryExclusions", typ: a(r("CommerceCountryExclusion")) },
        { json: "abTestValues", js: "abTestValues", typ: a("any") },
        { json: "productRollup", js: "productRollup", typ: r("ProductRollup") },
        { json: "quantityLimit", js: "quantityLimit", typ: 0 },
        { json: "styleType", js: "styleType", typ: r("StyleType") },
        { json: "productType", js: "productType", typ: "" },
        { json: "publishType", js: "publishType", typ: "" },
        { json: "mainColor", js: "mainColor", typ: true },
        { json: "isImageAvailable", js: "isImageAvailable", typ: true },
        { json: "isCopyAvailable", js: "isCopyAvailable", typ: true },
        { json: "isAttributionApproved", js: "isAttributionApproved", typ: true },
        { json: "isAppleWatch", js: "isAppleWatch", typ: true },
        { json: "exclusiveAccess", js: "exclusiveAccess", typ: true },
        { json: "hardLaunch", js: "hardLaunch", typ: true },
        { json: "hideFromCSR", js: "hideFromCSR", typ: true },
        { json: "commercePublishDate", js: "commercePublishDate", typ: Date },
        { json: "commerceStartDate", js: "commerceStartDate", typ: Date },
        { json: "softLaunchDate", js: "softLaunchDate", typ: u(undefined, Date) },
        { json: "isPromoExclusionMessage", js: "isPromoExclusionMessage", typ: true },
        { json: "limitRetailExperience", js: "limitRetailExperience", typ: a(r("LimitRetailExperience")) },
        { json: "resourceType", js: "resourceType", typ: r("Type") },
        { json: "links", js: "links", typ: r("ObjectLinks") },
        { json: "isCustomsApproved", js: "isCustomsApproved", typ: true },
        { json: "inventoryShareOff", js: "inventoryShareOff", typ: u(undefined, true) },
        { json: "hideFromSearch", js: "hideFromSearch", typ: u(undefined, true) },
    ], false),
    "ConsumerChannel": o([
        { json: "id", js: "id", typ: "" },
        { json: "resourceType", js: "resourceType", typ: r("ConsumerChannelResourceType") },
    ], false),
    "LimitRetailExperience": o([
        { json: "value", js: "value", typ: r("Value") },
        { json: "disabledStoreOfferingCodes", js: "disabledStoreOfferingCodes", typ: a("") },
    ], false),
    "ProductRollup": o([
        { json: "type", js: "type", typ: "" },
        { json: "key", js: "key", typ: "" },
    ], false),
    "TaxonomyAttribute": o([
        { json: "resourceType", js: "resourceType", typ: "" },
        { json: "ids", js: "ids", typ: a("") },
    ], false),
    "ValueAddedService": o([
        { json: "id", js: "id", typ: "" },
        { json: "vasType", js: "vasType", typ: r("VasType") },
    ], false),
    "ProductContent": o([
        { json: "globalPid", js: "globalPid", typ: "" },
        { json: "langLocale", js: "langLocale", typ: "" },
        { json: "colorDescription", js: "colorDescription", typ: "" },
        { json: "slug", js: "slug", typ: "" },
        { json: "fullTitle", js: "fullTitle", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "descriptionHeading", js: "descriptionHeading", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "techSpec", js: "techSpec", typ: "" },
        { json: "manufacturingCountriesOfOrigin", js: "manufacturingCountriesOfOrigin", typ: a("any") },
        { json: "colors", js: "colors", typ: a(r("Color")) },
        { json: "bestFor", js: "bestFor", typ: a("any") },
        { json: "athletes", js: "athletes", typ: a("any") },
        { json: "widths", js: "widths", typ: a(r("Width")) },
    ], false),
    "Color": o([
        { json: "type", js: "type", typ: r("ColorType") },
        { json: "name", js: "name", typ: "" },
        { json: "hex", js: "hex", typ: u(undefined, "") },
    ], false),
    "Width": o([
        { json: "value", js: "value", typ: "" },
        { json: "localizedValue", js: "localizedValue", typ: "" },
    ], false),
    "Skus": o([
        { json: "id", js: "id", typ: "" },
        { json: "snapshotId", js: "snapshotId", typ: "" },
        { json: "productId", js: "productId", typ: "" },
        { json: "parentId", js: "parentId", typ: "" },
        { json: "parentType", js: "parentType", typ: r("Type") },
        { json: "modificationDate", js: "modificationDate", typ: Date },
        { json: "merchGroup", js: "merchGroup", typ: r("MerchGroup") },
        { json: "stockKeepingUnitId", js: "stockKeepingUnitId", typ: "" },
        { json: "gtin", js: "gtin", typ: "" },
        { json: "nikeSize", js: "nikeSize", typ: "" },
        { json: "sizeConversionId", js: "sizeConversionId", typ: "" },
        { json: "countrySpecifications", js: "countrySpecifications", typ: a(r("CountrySpecification")) },
        { json: "resourceType", js: "resourceType", typ: r("SkusResourceType") },
        { json: "vatCode", js: "vatCode", typ: "" },
        { json: "links", js: "links", typ: r("ObjectLinks") },
    ], false),
    "CountrySpecification": o([
        { json: "country", js: "country", typ: r("Marketplace") },
        { json: "localizedSize", js: "localizedSize", typ: "" },
        { json: "localizedSizePrefix", js: "localizedSizePrefix", typ: r("MerchGroup") },
        { json: "taxInfo", js: "taxInfo", typ: r("TaxInfo") },
    ], false),
    "TaxInfo": o([
        { json: "vat", js: "vat", typ: 0 },
    ], false),
    "SocialInterest": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "PublishedContent": o([
        { json: "preview", js: "preview", typ: true },
        { json: "externalReferences", js: "externalReferences", typ: a("any") },
        { json: "marketplace", js: "marketplace", typ: r("Marketplace") },
        { json: "collectionGroupId", js: "collectionGroupId", typ: "" },
        { json: "createdDateTime", js: "createdDateTime", typ: Date },
        { json: "language", js: "language", typ: "" },
        { json: "viewStartDate", js: "viewStartDate", typ: Date },
        { json: "type", js: "type", typ: "" },
        { json: "version", js: "version", typ: "" },
        { json: "analytics", js: "analytics", typ: r("Analytics") },
        { json: "nodes", js: "nodes", typ: a(r("PublishedContentNode")) },
        { json: "payloadType", js: "payloadType", typ: "" },
        { json: "publishStartDate", js: "publishStartDate", typ: Date },
        { json: "supportedLanguages", js: "supportedLanguages", typ: a("any") },
        { json: "publishEndDate", js: "publishEndDate", typ: Date },
        { json: "subType", js: "subType", typ: "" },
        { json: "links", js: "links", typ: r("PublishedContentLinks") },
        { json: "id", js: "id", typ: "" },
        { json: "properties", js: "properties", typ: r("PublishedContentProperties") },
        { json: "resourceType", js: "resourceType", typ: "" },
    ], false),
    "Analytics": o([
        { json: "hashKey", js: "hashKey", typ: "" },
    ], false),
    "PublishedContentLinks": o([
        { json: "self", js: "self", typ: "" },
    ], false),
    "PublishedContentNode": o([
        { json: "analytics", js: "analytics", typ: r("Analytics") },
        { json: "nodes", js: "nodes", typ: u(undefined, a(r("NodeNode"))) },
        { json: "subType", js: "subType", typ: r("SubTypeEnum") },
        { json: "id", js: "id", typ: "" },
        { json: "type", js: "type", typ: r("PurpleType") },
        { json: "version", js: "version", typ: "" },
        { json: "properties", js: "properties", typ: r("FluffyProperties") },
    ], false),
    "NodeNode": o([
        { json: "analytics", js: "analytics", typ: r("Analytics") },
        { json: "subType", js: "subType", typ: r("SubTypeEnum") },
        { json: "id", js: "id", typ: "" },
        { json: "type", js: "type", typ: r("PurpleType") },
        { json: "version", js: "version", typ: "" },
        { json: "properties", js: "properties", typ: r("PurpleProperties") },
    ], false),
    "PurpleProperties": o([
        { json: "portraitId", js: "portraitId", typ: "" },
        { json: "squarishURL", js: "squarishURL", typ: "" },
        { json: "product", js: "product", typ: a("any") },
        { json: "landscapeId", js: "landscapeId", typ: "" },
        { json: "altText", js: "altText", typ: "" },
        { json: "portraitURL", js: "portraitURL", typ: "" },
        { json: "landscapeURL", js: "landscapeURL", typ: "" },
        { json: "portrait", js: "portrait", typ: r("Landscape") },
        { json: "squarish", js: "squarish", typ: r("Landscape") },
        { json: "title", js: "title", typ: "" },
        { json: "squarishId", js: "squarishId", typ: "" },
        { json: "copyId", js: "copyId", typ: r("CopyID") },
        { json: "imageCaption", js: "imageCaption", typ: "" },
        { json: "richTextLinks", js: "richTextLinks", typ: a("any") },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "colorTheme", js: "colorTheme", typ: r("ColorTheme") },
        { json: "secondaryPortrait", js: "secondaryPortrait", typ: r("SecondaryPortrait") },
        { json: "style", js: "style", typ: r("Style") },
        { json: "actions", js: "actions", typ: a("any") },
        { json: "landscape", js: "landscape", typ: r("Landscape") },
        { json: "custom", js: "custom", typ: u(undefined, r("GroupedCollectionTermIDS")) },
    ], false),
    "Landscape": o([
        { json: "aspectRatio", js: "aspectRatio", typ: u(undefined, 3.14) },
        { json: "id", js: "id", typ: "" },
        { json: "type", js: "type", typ: u(undefined, r("ThreadTypeEnum")) },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "view", js: "view", typ: u(undefined, "") },
    ], false),
    "SecondaryPortrait": o([
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
    ], false),
    "Style": o([
        { json: "defaultStyle", js: "defaultStyle", typ: r("GroupedCollectionTermIDS") },
        { json: "modifiedDate", js: "modifiedDate", typ: Date },
        { json: "exposeTemplate", js: "exposeTemplate", typ: true },
        { json: "properties", js: "properties", typ: r("StyleProperties") },
        { json: "resourceType", js: "resourceType", typ: r("StyleResourceType") },
    ], false),
    "StyleProperties": o([
        { json: "actions", js: "actions", typ: r("GroupedCollectionTermIDS") },
    ], false),
    "FluffyProperties": o([
        { json: "product", js: "product", typ: a("any") },
        { json: "containerType", js: "containerType", typ: u(undefined, "") },
        { json: "custom", js: "custom", typ: r("GroupedCollectionTermIDS") },
        { json: "jsonBody", js: "jsonBody", typ: u(undefined, r("JSONBody")) },
        { json: "body", js: "body", typ: u(undefined, "") },
        { json: "title", js: "title", typ: "" },
        { json: "speed", js: "speed", typ: u(undefined, 0) },
        { json: "copyId", js: "copyId", typ: "" },
        { json: "loop", js: "loop", typ: u(undefined, true) },
        { json: "richTextLinks", js: "richTextLinks", typ: a("any") },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "colorTheme", js: "colorTheme", typ: r("ColorTheme") },
        { json: "style", js: "style", typ: r("Style") },
        { json: "autoPlay", js: "autoPlay", typ: u(undefined, true) },
        { json: "actions", js: "actions", typ: a(r("Action")) },
        { json: "portraitId", js: "portraitId", typ: u(undefined, "") },
        { json: "squarishURL", js: "squarishURL", typ: u(undefined, "") },
        { json: "landscapeId", js: "landscapeId", typ: u(undefined, "") },
        { json: "altText", js: "altText", typ: u(undefined, "") },
        { json: "portraitURL", js: "portraitURL", typ: u(undefined, "") },
        { json: "landscapeURL", js: "landscapeURL", typ: u(undefined, "") },
        { json: "portrait", js: "portrait", typ: u(undefined, r("Landscape")) },
        { json: "squarish", js: "squarish", typ: u(undefined, r("Landscape")) },
        { json: "squarishId", js: "squarishId", typ: u(undefined, "") },
        { json: "imageCaption", js: "imageCaption", typ: u(undefined, "") },
        { json: "secondaryPortrait", js: "secondaryPortrait", typ: u(undefined, r("SecondaryPortrait")) },
        { json: "landscape", js: "landscape", typ: u(undefined, r("Landscape")) },
        { json: "internalName", js: "internalName", typ: u(undefined, "") },
    ], false),
    "Action": o([
        { json: "analytics", js: "analytics", typ: r("Analytics") },
        { json: "actionType", js: "actionType", typ: "" },
        { json: "product", js: "product", typ: r("DestinationProduct") },
        { json: "destination", js: "destination", typ: r("Destination") },
        { json: "id", js: "id", typ: "" },
        { json: "destinationId", js: "destinationId", typ: r("StyleColor") },
    ], false),
    "Destination": o([
        { json: "product", js: "product", typ: r("DestinationProduct") },
        { json: "type", js: "type", typ: "" },
    ], false),
    "DestinationProduct": o([
        { json: "productId", js: "productId", typ: "" },
        { json: "styleColor", js: "styleColor", typ: r("StyleColor") },
        { json: "threadId", js: "threadId", typ: u(undefined, "") },
    ], false),
    "JSONBody": o([
        { json: "type", js: "type", typ: r("JSONBodyType") },
        { json: "content", js: "content", typ: a(r("JSONBodyContent")) },
    ], false),
    "JSONBodyContent": o([
        { json: "type", js: "type", typ: r("FluffyType") },
        { json: "content", js: "content", typ: a(r("ContentContent")) },
    ], false),
    "ContentContent": o([
        { json: "text", js: "text", typ: "" },
        { json: "type", js: "type", typ: r("SubTypeEnum") },
    ], false),
    "PublishedContentProperties": o([
        { json: "custom", js: "custom", typ: r("Custom") },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "publish", js: "publish", typ: r("Publish") },
        { json: "threadType", js: "threadType", typ: r("ThreadTypeEnum") },
        { json: "title", js: "title", typ: "" },
        { json: "seo", js: "seo", typ: r("SEO") },
        { json: "coverCard", js: "coverCard", typ: r("CoverCard") },
        { json: "products", js: "products", typ: a(r("ProductElement")) },
        { json: "social", js: "social", typ: u(undefined, r("Social")) },
    ], false),
    "CoverCard": o([
        { json: "analytics", js: "analytics", typ: r("Analytics") },
        { json: "subType", js: "subType", typ: r("SubTypeEnum") },
        { json: "id", js: "id", typ: "" },
        { json: "type", js: "type", typ: r("PurpleType") },
        { json: "version", js: "version", typ: "" },
        { json: "properties", js: "properties", typ: r("CoverCardProperties") },
    ], false),
    "CoverCardProperties": o([
        { json: "portraitId", js: "portraitId", typ: "" },
        { json: "squarishURL", js: "squarishURL", typ: "" },
        { json: "product", js: "product", typ: a("any") },
        { json: "landscapeId", js: "landscapeId", typ: "" },
        { json: "altText", js: "altText", typ: "" },
        { json: "portraitURL", js: "portraitURL", typ: "" },
        { json: "custom", js: "custom", typ: r("GroupedCollectionTermIDS") },
        { json: "landscapeURL", js: "landscapeURL", typ: "" },
        { json: "portrait", js: "portrait", typ: r("Landscape") },
        { json: "squarish", js: "squarish", typ: r("Landscape") },
        { json: "title", js: "title", typ: "" },
        { json: "squarishId", js: "squarishId", typ: "" },
        { json: "copyId", js: "copyId", typ: "" },
        { json: "imageCaption", js: "imageCaption", typ: "" },
        { json: "richTextLinks", js: "richTextLinks", typ: a("any") },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "colorTheme", js: "colorTheme", typ: r("ColorTheme") },
        { json: "secondaryPortrait", js: "secondaryPortrait", typ: r("SocialInterest") },
        { json: "style", js: "style", typ: r("Style") },
        { json: "actions", js: "actions", typ: a("any") },
        { json: "landscape", js: "landscape", typ: r("Landscape") },
    ], false),
    "Custom": o([
        { json: "hideFromUpcoming", js: "hideFromUpcoming", typ: u(undefined, a("any")) },
    ], false),
    "ProductElement": o([
        { json: "productId", js: "productId", typ: "" },
        { json: "styleColor", js: "styleColor", typ: r("StyleColor") },
    ], false),
    "Publish": o([
        { json: "collectionGroups", js: "collectionGroups", typ: a("") },
        { json: "collections", js: "collections", typ: a("") },
        { json: "countries", js: "countries", typ: a("") },
        { json: "pageId", js: "pageId", typ: "" },
    ], false),
    "SEO": o([
        { json: "keywords", js: "keywords", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "doNotIndex", js: "doNotIndex", typ: true },
        { json: "title", js: "title", typ: "" },
        { json: "slug", js: "slug", typ: "" },
    ], false),
    "Social": o([
        { json: "comments", js: "comments", typ: true },
        { json: "share", js: "share", typ: true },
        { json: "likes", js: "likes", typ: true },
    ], false),
    "Search": o([
        { json: "conceptIds", js: "conceptIds", typ: a("") },
    ], false),
    "Pages": o([
        { json: "prev", js: "prev", typ: "" },
        { json: "next", js: "next", typ: "" },
        { json: "totalPages", js: "totalPages", typ: 0 },
        { json: "totalResources", js: "totalResources", typ: 0 },
    ], false),
    "Marketplace": [
        "CZ",
    ],
    "Level": [
        "HIGH",
        "LOW",
        "MEDIUM",
        "OOS",
    ],
    "MerchGroup": [
        "EU",
    ],
    "LocationIDType": [
        "merchGroup",
    ],
    "Method": [
        "SHIP",
    ],
    "StyleColor": [
        "DA6672-700",
        "DM8019-200",
        "DM8019-700",
        "DO8727-100",
        "DO9334-100",
        "DQ0299-100",
    ],
    "StyleType": [
        "INLINE",
    ],
    "Type": [
        "merchProduct",
    ],
    "Channel": [
        "Nike Store Experiences",
        "SNKRS",
    ],
    "CommerceCountryExclusion": [
        "RU",
        "TR",
    ],
    "ConsumerChannelResourceType": [
        "globalization/consumer_channels",
    ],
    "Value": [
        "Nike App Self-Checkout",
        "Scan to Learn",
        "Scan to Try",
    ],
    "VasType": [
        "GIFT_MESSAGE",
        "GIFT_WRAP",
    ],
    "ColorType": [
        "LOGO",
        "PRIMARY",
        "SECONDARY",
        "SIMPLE",
        "TERTIARY",
    ],
    "SkusResourceType": [
        "merchSku",
    ],
    "ColorTheme": [
        "dark",
        "light",
    ],
    "CopyID": [
        "bf21a9e8fbc5a3846fb05b4fa0859e0917b2202f",
    ],
    "ThreadTypeEnum": [
        "editorial",
        "product",
    ],
    "StyleResourceType": [
        "content/style",
    ],
    "SubTypeEnum": [
        "carousel",
        "image",
        "text",
    ],
    "PurpleType": [
        "card",
    ],
    "FluffyType": [
        "paragraph",
    ],
    "JSONBodyType": [
        "doc",
    ],
};
