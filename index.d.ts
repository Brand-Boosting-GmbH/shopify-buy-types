/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
declare module ShopifyBuy {
    export interface CheckoutResource {
      updateLineItems(
        checkoutId: string | number,
        lineItems: AttributeInput[]
      ): Promise<Cart>
  
      updateAttributes(
        checkoutId: string | number,
        input: { customAttributes: CustomAttribute[] }
      ): Promise<Cart>
  
      create(
        email?: string,
        lineItems?: LineItem[],
        shippingAddress?: Address,
        note?: string,
        customAttributes?: AttributeInput[],
      ): Promise<Cart>;
  
      fetch(id: string): Promise<Cart>;
  
      addLineItems(checkoutId: string | number, lineItems: LineItemToAdd[]): Promise<Cart>;
  
      /**
       * Remove all line items from cart
       */
      clearLineItems(checkoutId: string | number, lineItems: LineItem[]): Promise<Cart>;
  
      /**
       * Add items to cart. Updates cart's lineItems
       */
      addVariants(item: Item, nextItem?: Item[]): Promise<Cart>;
  
      /**
       * Remove a line item from cart based on line item id
       */
      removeLineItems(checkoutId: string | number, lineItemIds: string[]): Promise<Cart>;
  
      /**
       * Add discount to cart
       */
      addDiscount(checkoutId: string | number, discountCode: string): Promise<Cart>;
  
      /**
       * Remove discounts from cart
       */
      removeDiscount(checkoutId: string | number): Promise<Cart>;
    }
  
    export interface Config {
      domain: string;
      storefrontAccessToken: string;
      language?: string | undefined; // error TODO
    }
  
    export interface ProductResource {
      fetch(id: string): Promise<Product>;
      fetchAll(pageSizeopt?: number): Promise<Product[]>;
      fetchByHandle(handle: string): Promise<Product>;
      fetchMultiple(ids: string[]): Promise<Product[]>;
      fetchQuery(query: Query): Promise<Product[]>;
      variantForOptions(product: Product, options: Option): ProductVariant;
    }
  
    export interface CollectionResource {
      fetch(id: string): Promise<Collection>;
      fetchWithProducts(id: string): Promise<CollectionWithProducts>;
      fetchAll(pageSizeopt?: number): Promise<Collection[]>;
      fetchAllWithProducts(): Promise<CollectionWithProducts[]>;
      fetchByHandle(handle: string): Promise<Collection>;
      fetchQuery(query: Query): Promise<Collection[]>;
    }
  
    export interface ShopResource {
        fetchInfo(): Promise<Shop>;
        fetchPolicies(): Promise<Shop>;
    }
  
    export interface Shop {
      /**
       * A description of the shop.
       */
      description: string;
      /**
       * A string representing the way currency is formatted when the currency isn’t specified.
       */
      moneyFormat: string;
      /**
       * The shop’s name.
       */
      name: string;
      /**
       * Settings related to payments.
       */
      paymentSettings: PaymentSettings;
      /**
       * The shop’s primary domain.
       */
      primaryDomain: Domain;
      /**
       * The shop’s privacy policy.
       */
      privacyPolicy: ShopPolicy | undefined;
      /**
       * The shop’s refund policy.
       */
      refundPolicy: ShopPolicy | undefined;
      /**
       * The shop’s shipping policy.
       */
      shippingPolicy: ShopPolicy | undefined;
      /**
       * The shop’s terms of service.
       */
      termsOfService: ShopPolicy | undefined;
      /**
       * Countries that the shop ships to.
       */
      shipsToCountries: CountryCode[] | undefined;
    }
  
    export interface ShopPolicy {
      /**
       * Policy text, maximum size of 64kb.
       */
      body: string;
      /**
       * Policy’s handle.
       */
      handle: string;
      /**
       * A globally-unique identifier.
       */
      id: string;
      /**
       * Policy’s title.
       */
      title: string;
      /**
       * Public URL to the policy.
       */
      url: string;
    }
  
    export interface Domain {
      /**
       * The host name of the domain (eg: example.com).
       */
      host: string;
      /**
       * Whether SSL is enabled or not.
       */
      sslEnabled: boolean;
      /**
       * The URL of the domain (eg: https://example.com).
       */
      url: string;
    }
  
    export interface PaymentSettings {
      /**
       * List of the card brands which the shop accepts.
       */
      acceptedCardBrands: CardBrand[];
      /**
       * The url pointing to the endpoint to vault credit cards.
       */
      cardVaultUrl: string;
      /**
       * The country where the shop is located.
       */
      countryCode: CountryCode;
      /**
       * The three-letter code for the shop's primary currency.
       */
      currencyCode: CurrencyCode;
      /**
       * A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.
       */
      enabledPresentmentCurrencies: CurrencyCode[] | undefined;
      /**
       * The shop’s Shopify Payments account id.
       */
      shopifyPaymentsAccountId: string | undefined;
      /**
       * List of the digital wallets which the shop supports.
       */
      supportedDigitalWallets: DigitalWallet[];
    }
  
    export type DigitalWallet = 'ANDROID_PAY' | 'APPLE_PAY' | 'GOOGLE_PAY' | 'SHOPIFY_PAY'
  
    export type CountryCode = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AN' | 'AO' | 'AR' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BV' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GW' | 'GY' | 'HK' | 'HM' | 'HN' | 'HR' | 'HT' | 'HU' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PS' | 'PT' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW' | 'ZZ'
  
    export type CardBrand = 'AMERICAN_EXPRESS' | 'DINERS_CLUB' | 'DISCOVER' | 'JCB' | 'MASTERCARD' | 'VISA'
  
    export interface Address {
      /**
       * Returns the value of the Address1 field of the address.
       */
      address1: String;
      /**
       * Returns the value of the Address2 field of the address.
       */
      address2: String;
      /**
       * Returns the value of the City field of the address.
       */
      city: String;
      /**
       * Returns the value of the Company field of the address.
       */
      company: String;
      /**
       * Returns the value of the Country field of the address.
       */
      country: String;
      /**
       * Returns the value of the First Name field of the address.
       */
      firstName: String;
      /**
       * Returns the value of the Last Name field of the address.
       */
      lastName: String;
      /**
       * Returns the value of the Phone field of the address.
       */
      phone: String;
      /**
       * Returns the value of the Province/State field of the address.
       */
      province: String;
      /**
       * Returns the value of the Postal/Zip field of the address.
       */
      zip: String;
    }
  
    export interface Query {
      /**
       * TODO
       */
      query: string;
      /**
       * TODO
       */
      sortKey: string;
      /**
       * TODO
       */
      after: string | undefined;
      /**
       * TODO
       */
      before: string | undefined;
      /**
       * TODO
       */
      first: number | undefined;
      /**
       * TODO
       */
      last: number | undefined;
      /**
       * TODO
       */
      reverse: boolean | undefined;
    }
  
    export interface ProductVariant {
      /**
       * Variant in stock. Always true if inventory tracking is disabled.
       */
      available: boolean;
  
      /**
       * Compare at price for variant. The compareAtPrice would be the price of the
       * product previously before the product went on sale.
       */
      compareAtPrice: string;
  
      /**
       * Price of variant, formatted according to shop currency format string. For instance "$10.00"
       */
      formattedPrice: string;
  
      /**
       * Variant weight in grams. If no weight is defined grams will be 0.
       */
      grams: number;
  
      /**
       * Variant unique ID
       */
      id: string | number;
  
      /**
       * Image for variant
       */
  
      image: Image;
  
      /**
       * Image variants available for a variant.
       */
      imageVariant: Array<ImageVariant>;
  
      /**
       * Option values associated with this variant, ex {name: "color", value: "Blue"}
       */
      optionValues: Array<OptionValue>;
  
      /**
       * Price of the variant. The price will be in the following form: "10.00"
       */
      price: string;
  
      /**
       * ID of product variant belongs to
       */
      productId: string | number;
  
      /**
       * Title of product variant belongs to
       */
      productTitle: string;
  
      /**
       * Title of variant
       */
      title: string;
  
      /*
       * Get a checkout url for a specific product variant.
       * You can optionally pass a quantity.
       * If no quantity is passed then quantity will default to 1.
       */
      checkoutUrl(quantitiy: number): string;
    }
  
    export interface ImageVariant extends Image {
      name: string;
      dimensions: string;
      src: string;
      /**
       * Returns src URL for new image size/variant
       * @param image The image you would like a different size for.
       * @param options Image Max width and height configuration.
       */
      imageForSize(image: Image, options: ImageOptions): string;
    }
  
    export interface ImageOptions {
      maxWidth: number;
      maxHeight: number;
    }
  
    export interface Option {
      /**
       * name of option (ex. "Size", "Color")
       */
      name: string;
  
      /**
       * get/set the currently selected option value with one of the values from the Product Options/values array.
       * For instance if the option values array had the following ["Large", "Medium", "Small"] setting selected to be
       * "Large", "Medium", or "Small" would be valid any other value would throw an Error.
       */
      selected: string;
  
      /**
       * an Array possible values for option. For instance if this option
       * is a "Size" option an example value for values could be: ["Large", "Medium", "Small"]
       */
      values: OptionValue[];
    }
  
    export interface Item {
      variant: ProductVariant;
      quantity: number;
    }
  
    export interface LineItemToAdd {
      variantId: string | number;
      quantity: number;
      customAttributes?: CustomAttribute[] | undefined;
    }
  
    export interface OptionValue {
      name: string;
      optionId: string;
      value: any;
    }
  
    export interface VariableValues {
      /**
      * TODO
      */
      id: string | number
    }
  
    export interface CustomAttribute {
      /**
      * Key or name of the attribute.
      */
      key: string
      /**
      * Value of the attribute.
      */
      value: string
    }
  
    export interface AttributeInput {
      key?: string | undefined;
      value?: string | undefined;
      id?: string | number | undefined;
      quantity?: number | undefined;
      variantId?: string | undefined;
    }
  
    export interface Product {
      /**
      * A globally-unique identifier.
      */
      id: string | number
      /**
      * A unique human-friendly string of the product's title.
      */
      handle: string
  
      /**
      * TODO
      */
      availableForSale: boolean
      /**
      * The date and time (ISO 8601 format) when the product was created.
      */
      createdAt: string
      /**
      * A stripped description of the product, single line with HTML tags removed.
      */
      description: string
      /**
      * The description of the product, complete with HTML formatting.
      */
      descriptionHtml: string
      /**
      * TODO
      */
      hasNextPage: boolean
      /**
      * TODO
      */
      hasPreviousPage: boolean
      /**
      * The images associated with the product.
      */
      images: Image[]
      /**
      * TODO
      */
      onlineStoreUrl: string
      /**
      * A list of product options. The limit is specified by Shop.resourceLimits.maxProductOptions.
      */
      options: Option[]
      /**
      * The product type specified by the merchant.
      */
      productType: string
      /**
      * The date and time (ISO 8601 format) when the product was published to the Online Store.
      */
      publishedAt: string
      /**
      * The title of the product.
      */
      title: string
      /**
      * The date and time when the product was last modified. A product's updatedAt value can change for different reasons. For example, if an order is placed for a product that has inventory tracking set up, then the inventory adjustment is counted as an update.
      */
      updatedAt: string
      /**
      * A list of variants associated with the product.
      */
      variants: Variant[]
      /**
      * The name of the product's vendor.
      */
      vendor: string
    }
  
    export interface UnitPriceMeasurement {
      /**
      * The type of unit of measurement for the unit price measurement.
      */
      measuredType: string
      /**
      * The quantity unit for the unit price measurement.
      */
      quantityUnit: string
      /**
      * The quantity value for the unit price measurement.
      */
      quantityValue: number
      /**
      * The reference unit for the unit price measurement.
      */
      referenceUnit: string
      /**
      * The reference value for the unit price measurement.
      */
      referenceValue: number
    }
  
    export interface SelectedOptions {
      /**
      * The product option’s name.
      */
      name: string
      /**
      * The product option’s value.
      */
      value: string
    }
  
    export interface Image {
      /**
      * A unique identifier for the image.
      */
      id: string | number
      /**
      * TODO
      */
      src: string
      /**
      * A word or phrase to share the nature or contents of an image.
      */
      altText: string
      /**
      * The original height of the image in pixels. Returns null if the image is not hosted by Shopify.
      */
      height: number
      /**
      * The original width of the image in pixels. Returns null if the image is not hosted by Shopify.
      */
      width: number
    }
  
    export interface PresentmentPrices {
      /**
      * TODO
      */
      hasNextPage: boolean
      /**
      * TODO
      */
      hasPreviousPage: boolean
      /**
      * TODO
      */
      variableValues: VariableValues
  
      /**
      * TODO
      */
      compareAtPrice: MoneyV2
      /**
      * TODO
      */
      price: MoneyV2
    }
  
    export interface Variant {
      /**
      * A globally-unique identifier.
      */
      id: string | number
      /**
      * The title of the product variant.
      */
      title: string
      /**
      * The price of the product variant in the default shop currency.
      */
      price: string
      /**
      * The weight of the product variant in the unit system specified with weight_unit.
      */
      weight: number
      /**
      * Whether the product variant is available for sale.
      */
      available: boolean
      /**
      * An identifier for the product variant in the shop. Required in order to connect to a fulfillment service.
      */
      sku: string
      /**
      * The compare-at price of the variant in the default shop currency.
      */
      compareAtPrice: string
      /**
      * The price of the product variant in the default shop currency.
      */
      unitPrice: string
  
      /**
      * TODO
      */
      product: Product
      /**
      * TODO
      */
      unitPriceMeasurement: UnitPriceMeasurement
      /**
      * List of product options applied to the variant.
      */
      selectedOptions: SelectedOptions[]
      /**
      * The featured image for the variant.
      */
      image: Image
      /**
      * The compare-at price of the variant in the default shop currency.
      */
      compareAtPriceV2: MoneyV2
      /**
      * List of prices and compare-at prices in the presentment currencies for this shop.
      */
      presentmentPrices: PresentmentPrices[]
      /**
      * The price of the product variant in the default shop currency.
      */
      priceV2: MoneyV2
    }
  
    export interface LineItem {
      /**
      * A globally-unique identifier.
      */
      id: string | number
      /**
      * Title of the line item. Defaults to the product's title.
      */
      title: string
      /**
      * The quantity of the line item.
      */
      quantity: number
      /**
      * TODO
      */
      hasNextPage: boolean
      /**
      * TODO
      */
      hasPreviousPage: boolean
      /**
      * TODO
      */
      variableValues: VariableValues
  
      /**
      * The discounts that have been allocated onto the checkout line item by discount applications.
      */
      discountAllocations: string[]
      /**
      * Extra information in the form of an array of Key-Value pairs about the line item.
      */
      customAttributes: CustomAttribute[]
      /**
      * Product variant of the line item.
      */
      variant: Variant
    }
  
    export interface MoneyV2 {
      /**
      * Decimal money amount.
      */
      amount: string
      /**
      * Currency of the money.
      */
      currencyCode: CurrencyCode
    }
  
    type CurrencyCode = 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTN' | 'BWP' | 'BYN' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JEP' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KID' | 'KMF' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LTL' | 'LVL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRU' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'SSP' | 'STD' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VES' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XOF' | 'XPF' | 'XXX' | 'YER' | 'ZAR' | 'ZMW' | 'BYR' | 'VEF'
  
    export interface AppliedGiftCard {
      /**
      * The amount that was taken from the gift card by applying it.
      */
      amountUsedV2: MoneyV2
      /**
      * The amount left on the gift card.
      */
      balanceV2: MoneyV2
      /**
      * A globally-unique identifier.
      */
      id: string | number
      /**
      * The last characters of the gift card.
      */
      lastCharacters: string
      /**
      * The amount that was applied to the checkout in its currency.
      */
      presentmentAmountUsed: MoneyV2
    }
  
    export interface Cart {
      /**
      * A globally-unique identifier.
      */
      id: string | number
      /**
      * Whether or not the Checkout is ready and can be completed. Checkouts may have asynchronous operations that can take time to finish. If you want to complete a checkout or ensure all the fields are populated and up to date, polling is required until the value is true.
      */
      ready: boolean
      /**
      * States whether or not the fulfillment requires shipping.
      */
      requiresShipping: boolean
      /**
      * The note associated with the checkout.
      */
      note: string
      /**
      * The amount left to be paid. This is equal to the cost of the line items, duties, taxes and shipping minus discounts and gift cards.
      */
      paymentDue: string
      /**
      * The url pointing to the checkout accessible from the web.
      */
      webUrl: string
      /**
      * The Order Status Page for this Checkout, null when checkout is not completed.
      */
      orderStatusUrl: string
      /**
      * Specifies if the Checkout is tax exempt.
      */
      taxExempt: boolean
      /**
      * Specifies if taxes are included in the line item and shipping line prices.
      */
      taxesIncluded: boolean
      /**
      * The currency code for the Checkout.
      */
      currencyCode: CurrencyCode
      /**
      * The sum of all the taxes applied to the line items and shipping lines in the checkout.
      */
      totalTax: string
      /**
      * Price of the checkout before duties, shipping and taxes.
      */
      subtotalPrice: string
      /**
      * The sum of all the prices of all the items in the checkout, duties, taxes and discounts included.
      */
      totalPrice: string
      /**
      * The date and time when the checkout was completed.
      */
      completedAt: string | null
      /**
      * The date and time when the checkout was created.
      */
      createdAt: string
      /**
      * The date and time when the checkout was last updated.
      */
      updatedAt: string
      /**
      * The email attached to this checkout.
      */
      email: string
      /**
      * The shipping address to where the line items will be shipped.
      */
      shippingAddress: string
      /**
      * Once a shipping rate is selected by the customer it is transitioned to a shipping_line object.
      */
      shippingLine: string
      /**
      * The resulting order from a paid checkout.
      */
      order: string
  
      /**
      * A list of line item objects, each one containing information about an item in the checkout.
      */
      lineItems: LineItem[]
      /**
      * A list of extra information that is added to the checkout.
      */
      customAttributes: CustomAttribute[]
      /**
      * The gift cards used on the checkout.
      */
      appliedGiftCards: AppliedGiftCard[]
      /**
      * Discounts that have been applied on the checkout.
      */
      discountApplications: string[]
      /**
      * The sum of all the prices of all the items in the checkout, duties, taxes and discounts included.
      */
      totalPriceV2: MoneyV2
      /**
      * Price of the checkout before duties, shipping and taxes.
      */
      subtotalPriceV2: MoneyV2
      /**
      * The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded.
      */
      lineItemsSubtotalPrice: MoneyV2
      /**
      * The sum of all the taxes applied to the line items and shipping lines in the checkout.
      */
      totalTaxV2: MoneyV2
      /**
      * The amount left to be paid. This is equal to the cost of the line items, duties, taxes and shipping minus discounts and gift cards.
      */
      paymentDueV2: MoneyV2
      /**
      * TODO
      */
      checkoutUrl: string | null
      /**
      * TODO
      */
      lineItemCount: number | null
      /**
      * TODO
      */
      onlineStoreUrl: string | null
    }
  
    export interface Collection {
      /**
      * The description of the collection, complete with HTML formatting.
      */
      descriptionHtml: string
      /**
      * Stripped description of the collection, single line with HTML tags removed.
      */
      description: string
      /**
      * A human-friendly unique string for the collection automatically generated from its title. Limit of 255 characters.
      */
      handle: string
      /**
      * TODO
      */
      hasNextPage: boolean
      /**
      * TODO
      */
      hasPreviousPage: boolean
      /**
      * A globally-unique identifier.
      */
      id: string
      /**
      * Image associated with the collection.
      */
      image: Image
      /**
      * Image associated with the collection.
      */
      title: string
      /**
      * The date and time when the collection was last modified.
      */
      updatedAt: string
    }
  
    export interface CollectionWithProducts extends Collection {
      /**
       * TODO
       */
       products: Product[] | undefined
    }
  }
  