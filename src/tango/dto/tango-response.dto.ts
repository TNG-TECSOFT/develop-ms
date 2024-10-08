interface Paging {
  PageNumber: number;
  PageSize: number;
  MoreData: boolean;
}

interface ShippingAddress {
  Code: string;
  Address: string;
  ProvinceCode: string;
  City: string;
  PostalCode: string;
  PhoneNumber1: string;
  PhoneNumber2: string;
  DefaultAddress: string;
  Enabled: string;
  DeliveryHours: string;
  DeliversMonday: string;
  DeliversTuesday: string;
  DeliversWednesday: string;
  DeliversThursday: string;
  DeliversFriday: string;
  DeliversSaturday: string;
  DeliversSunday: string;
}

interface CustomerComment {
  Line: number;
  Text: string;
}

interface CustomerData {
  Code: string;
  BusinessName: string;
  TradeName: string;
  Address: string;
  PostalCode: string;
  City: string;
  ProvinceCode: string;
  TradeAddress: string;
  PhoneNumbers: string;
  Email: string;
  MobilePhoneNumber: string;
  WebPage: string;
  IvaCategoryCode: string;
  DocumentType: string;
  DocumentNumber: string;
  PriceListNumber: number;
  Discount: number;
  Observations: string;
  DisabledDate: Date | null;
  SellerCode: string;
  CreditQuota: number;
  LocalAccountBalance: number;
  ForeignAccountBalance: number;
  ForeignCurrencyClause: boolean;
  CreditQuotaCurrencyCode: string;
  UpdateDatetime: Date | null;
  LastUpdateUtc: string;
  ShippingAddresses: ShippingAddress[];
  CustomerComments: CustomerComment[];
  SaleConditionCode: number;
  TransportCode: string;
}

interface CustomerResponseDto {
  Paging: Paging;
  Data: CustomerData[];
}

interface ProductData {
  SKUCode: string;
  Description: string;
  AdditionalDescription: string;
  AlternativeCode: string;
  BarCode: string;
  Commission: number;
  Discount: number;
  MeasureUnitCode: string;
  SecondMeasureUnitCode: string;
  StockEquivalence: number;
  StockControlUnit: string;
  SalesMeasureUnitCode: string;
  SalesEquivalence: number;
  MaximumStock: number;
  MinimumStock: number;
  RestockPoint: number;
  Observations: string;
  Kit: boolean;
  KitValidityDateSince: Date | null;
  KitValidityDateUntil: Date | null;
  UseScale: string;
  Scale1: string;
  Scale2: string;
  BaseArticle: string;
  ScaleValue1: string;
  ScaleValue2: string;
  DescriptionScale1: string;
  DescriptionScale2: string;
  DescriptionValueScale1: string;
  DescriptionValueScale2: string;
  Disabled: boolean;
  ProductComposition: any[];
  ProductComments: any[];
}

interface ProductResponseDto {
  Paging: Paging;
  Data: ProductData[];
}

interface OrderData {
  OrderID: string;
  Date: string;
  Status: string;
  InvoiceType?: string;
  InvoiceNumber?: string;
  InvoiceFileUrl?: string;
  InvoiceFileExpiration?: string;
}

interface OrderResponseDto {
  Paging: Paging;
  Data: OrderData[];
}

export { CustomerResponseDto, ProductResponseDto, OrderResponseDto, CustomerData, ProductData, OrderData };