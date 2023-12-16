/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
	Date: { input: unknown; output: unknown };
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
	DateTime: { input: unknown; output: unknown };
	Hex: { input: unknown; output: unknown };
	/** Raw JSON value */
	Json: { input: unknown; output: unknown };
	/** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
	Long: { input: unknown; output: unknown };
	RGBAHue: { input: unknown; output: unknown };
	RGBATransparency: { input: unknown; output: unknown };
	/** Slate-compatible RichText AST */
	RichTextAST: { input: unknown; output: unknown };
};

export type Aggregate = {
	count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity &
	Node & {
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<Asset>;
		/** The file name */
		fileName: Scalars['String']['output'];
		/** The file handle */
		handle: Scalars['String']['output'];
		/** The height of the file */
		height?: Maybe<Scalars['Float']['output']>;
		/** List of Asset versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** System Locale field */
		locale: Locale;
		/** Get the other localizations for this document */
		localizations: Array<Asset>;
		/** The mime type of the file */
		mimeType?: Maybe<Scalars['String']['output']>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		/** The file size */
		size?: Maybe<Scalars['Float']['output']>;
		/** System stage field */
		stage: Stage;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
		/** Get the url for the asset with provided transformations applied. */
		url: Scalars['String']['output'];
		/** The file width */
		width?: Maybe<Scalars['Float']['output']>;
	};

/** Asset system model */
export type AssetCreatedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
	transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<AssetEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type AssetCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	fileName: Scalars['String']['input'];
	handle: Scalars['String']['input'];
	height?: InputMaybe<Scalars['Float']['input']>;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<AssetCreateLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	fileName: Scalars['String']['input'];
	handle: Scalars['String']['input'];
	height?: InputMaybe<Scalars['Float']['input']>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetCreateLocalizationInput = {
	/** Localization input */
	data: AssetCreateLocalizationDataInput;
	locale: Locale;
};

export type AssetCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
	/** Connect multiple existing Asset documents */
	connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Create and connect multiple existing Asset documents */
	create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
	/** Connect one existing Asset document */
	connect?: InputMaybe<AssetWhereUniqueInput>;
	/** Create and connect one Asset document */
	create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<AssetWhereStageInput>;
	documentInStages_none?: InputMaybe<AssetWhereStageInput>;
	documentInStages_some?: InputMaybe<AssetWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type AssetOrderByInput =
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'fileName_ASC'
	| 'fileName_DESC'
	| 'handle_ASC'
	| 'handle_DESC'
	| 'height_ASC'
	| 'height_DESC'
	| 'id_ASC'
	| 'id_DESC'
	| 'mimeType_ASC'
	| 'mimeType_DESC'
	| 'publishedAt_ASC'
	| 'publishedAt_DESC'
	| 'size_ASC'
	| 'size_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC'
	| 'width_ASC'
	| 'width_DESC';

/** Transformations for Assets */
export type AssetTransformationInput = {
	document?: InputMaybe<DocumentTransformationInput>;
	image?: InputMaybe<ImageTransformationInput>;
	/** Pass true if you want to validate the passed transformation parameters */
	validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
	fileName?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	/** Manage document localizations */
	localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
	fileName?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateLocalizationInput = {
	data: AssetUpdateLocalizationDataInput;
	locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>;
	/** Localizations to update */
	update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
	upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
	/** Connect multiple existing Asset documents */
	connect?: InputMaybe<Array<AssetConnectInput>>;
	/** Create and connect multiple Asset documents */
	create?: InputMaybe<Array<AssetCreateInput>>;
	/** Delete multiple Asset documents */
	delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Disconnect multiple Asset documents */
	disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Asset documents */
	set?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Update multiple Asset documents */
	update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Asset documents */
	upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
	fileName?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	/** Optional updates to localizations */
	localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationDataInput = {
	fileName?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	size?: InputMaybe<Scalars['Float']['input']>;
	width?: InputMaybe<Scalars['Float']['input']>;
};

export type AssetUpdateManyLocalizationInput = {
	data: AssetUpdateManyLocalizationDataInput;
	locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: AssetUpdateManyInput;
	/** Document search */
	where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
	/** Connect existing Asset document */
	connect?: InputMaybe<AssetWhereUniqueInput>;
	/** Create and connect one Asset document */
	create?: InputMaybe<AssetCreateInput>;
	/** Delete currently connected Asset document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected Asset document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Asset document */
	update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Asset document */
	upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: AssetUpdateInput;
	/** Unique document search */
	where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
	/** Create document if it didn't exist */
	create: AssetCreateInput;
	/** Update document if it exists */
	update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
	create: AssetCreateLocalizationDataInput;
	locale: Locale;
	update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: AssetUpsertInput;
	/** Unique document search */
	where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<AssetWhereStageInput>;
	documentInStages_none?: InputMaybe<AssetWhereStageInput>;
	documentInStages_some?: InputMaybe<AssetWhereStageInput>;
	fileName?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	fileName_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	fileName_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
	handle?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	handle_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	handle_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	handle_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	handle_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	handle_starts_with?: InputMaybe<Scalars['String']['input']>;
	height?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than the given value. */
	height_gt?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than or equal the given value. */
	height_gte?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are contained in given list. */
	height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	/** All values less than the given value. */
	height_lt?: InputMaybe<Scalars['Float']['input']>;
	/** All values less than or equal the given value. */
	height_lte?: InputMaybe<Scalars['Float']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	height_not?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are not contained in given list. */
	height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	mimeType?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	mimeType_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	mimeType_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	size?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than the given value. */
	size_gt?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than or equal the given value. */
	size_gte?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are contained in given list. */
	size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	/** All values less than the given value. */
	size_lt?: InputMaybe<Scalars['Float']['input']>;
	/** All values less than or equal the given value. */
	size_lte?: InputMaybe<Scalars['Float']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	size_not?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are not contained in given list. */
	size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
	width?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than the given value. */
	width_gt?: InputMaybe<Scalars['Float']['input']>;
	/** All values greater than or equal the given value. */
	width_gte?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are contained in given list. */
	width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
	/** All values less than the given value. */
	width_lt?: InputMaybe<Scalars['Float']['input']>;
	/** All values less than or equal the given value. */
	width_lte?: InputMaybe<Scalars['Float']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	width_not?: InputMaybe<Scalars['Float']['input']>;
	/** All values that are not contained in given list. */
	width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
	/** The number of nodes that have been affected by the Batch operation. */
	count: Scalars['Long']['output'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
	css: Scalars['String']['output'];
	hex: Scalars['Hex']['output'];
	rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
	hex?: InputMaybe<Scalars['Hex']['input']>;
	rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
	/** Connect document after specified document */
	after?: InputMaybe<Scalars['ID']['input']>;
	/** Connect document before specified document */
	before?: InputMaybe<Scalars['ID']['input']>;
	/** Connect document at last position */
	end?: InputMaybe<Scalars['Boolean']['input']>;
	/** Connect document at first position */
	start?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentFileTypes =
	| 'doc'
	| 'docx'
	| 'html'
	| 'jpg'
	| 'odp'
	| 'ods'
	| 'odt'
	| 'pdf'
	| 'png'
	| 'ppt'
	| 'pptx'
	| 'svg'
	| 'txt'
	| 'webp'
	| 'xls'
	| 'xlsx';

export type DocumentOutputInput = {
	/**
	 * Transforms a document into a desired file type.
	 * See this matrix for format support:
	 *
	 * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
	 * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
	 * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
	 * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
	 * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
	 * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
	 * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
	 * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
	 * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
	 * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
	 * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
	 * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * SVG:	jpg, odp, ods, odt, pdf, png, and webp
	 * HTML:	jpg, odt, pdf, svg, txt, and webp
	 * TXT:	jpg, html, odt, pdf, svg, and webp
	 */
	format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
	/** Changes the output for the file. */
	output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
	createdAt: Scalars['DateTime']['output'];
	data?: Maybe<Scalars['Json']['output']>;
	id: Scalars['ID']['output'];
	revision: Scalars['Int']['output'];
	stage: Stage;
};

/** An object with an ID */
export type Entity = {
	/** The id of the object. */
	id: Scalars['ID']['output'];
	/** The Stage of an object */
	stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export type EntityTypeName =
	/** Asset system model */
	| 'Asset'
	| 'OffersAccordion'
	/** Scheduled Operation system model */
	| 'ScheduledOperation'
	/** Scheduled Release system model */
	| 'ScheduledRelease'
	| 'Treatment'
	/** User system model */
	| 'User';

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
	/** The ID of an object */
	id: Scalars['ID']['input'];
	locale?: InputMaybe<Locale>;
	stage: Stage;
	/** The Type name of an object */
	typename: EntityTypeName;
};

export type ImageFit =
	/** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
	| 'clip'
	/** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
	| 'crop'
	/** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
	| 'max'
	/** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
	| 'scale';

export type ImageResizeInput = {
	/** The default value for the fit parameter is fit:clip. */
	fit?: InputMaybe<ImageFit>;
	/** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
	height?: InputMaybe<Scalars['Int']['input']>;
	/** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
	width?: InputMaybe<Scalars['Int']['input']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
	/** Resizes the image */
	resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export type Locale =
	/** System locale */
	'en';

/** Representing a geolocation point with latitude and longitude */
export type Location = {
	distance: Scalars['Float']['output'];
	latitude: Scalars['Float']['output'];
	longitude: Scalars['Float']['output'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
	from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
	latitude: Scalars['Float']['input'];
	longitude: Scalars['Float']['input'];
};

export type Mutation = {
	/**
	 * Create one asset
	 * @deprecated Asset mutations will be overhauled soon
	 */
	createAsset?: Maybe<Asset>;
	/** Create one offersAccordion */
	createOffersAccordion?: Maybe<OffersAccordion>;
	/** Create one scheduledRelease */
	createScheduledRelease?: Maybe<ScheduledRelease>;
	/** Create one treatment */
	createTreatment?: Maybe<Treatment>;
	/** Delete one asset from _all_ existing stages. Returns deleted document. */
	deleteAsset?: Maybe<Asset>;
	/**
	 * Delete many Asset documents
	 * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
	 */
	deleteManyAssets: BatchPayload;
	/** Delete many Asset documents, return deleted documents */
	deleteManyAssetsConnection: AssetConnection;
	/**
	 * Delete many OffersAccordion documents
	 * @deprecated Please use the new paginated many mutation (deleteManyOffersAccordionsConnection)
	 */
	deleteManyOffersAccordions: BatchPayload;
	/** Delete many OffersAccordion documents, return deleted documents */
	deleteManyOffersAccordionsConnection: OffersAccordionConnection;
	/**
	 * Delete many Treatment documents
	 * @deprecated Please use the new paginated many mutation (deleteManyTreatmentsConnection)
	 */
	deleteManyTreatments: BatchPayload;
	/** Delete many Treatment documents, return deleted documents */
	deleteManyTreatmentsConnection: TreatmentConnection;
	/** Delete one offersAccordion from _all_ existing stages. Returns deleted document. */
	deleteOffersAccordion?: Maybe<OffersAccordion>;
	/** Delete and return scheduled operation */
	deleteScheduledOperation?: Maybe<ScheduledOperation>;
	/** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
	deleteScheduledRelease?: Maybe<ScheduledRelease>;
	/** Delete one treatment from _all_ existing stages. Returns deleted document. */
	deleteTreatment?: Maybe<Treatment>;
	/** Publish one asset */
	publishAsset?: Maybe<Asset>;
	/**
	 * Publish many Asset documents
	 * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
	 */
	publishManyAssets: BatchPayload;
	/** Publish many Asset documents */
	publishManyAssetsConnection: AssetConnection;
	/**
	 * Publish many OffersAccordion documents
	 * @deprecated Please use the new paginated many mutation (publishManyOffersAccordionsConnection)
	 */
	publishManyOffersAccordions: BatchPayload;
	/** Publish many OffersAccordion documents */
	publishManyOffersAccordionsConnection: OffersAccordionConnection;
	/**
	 * Publish many Treatment documents
	 * @deprecated Please use the new paginated many mutation (publishManyTreatmentsConnection)
	 */
	publishManyTreatments: BatchPayload;
	/** Publish many Treatment documents */
	publishManyTreatmentsConnection: TreatmentConnection;
	/** Publish one offersAccordion */
	publishOffersAccordion?: Maybe<OffersAccordion>;
	/** Publish one treatment */
	publishTreatment?: Maybe<Treatment>;
	/** Schedule to publish one asset */
	schedulePublishAsset?: Maybe<Asset>;
	/** Schedule to publish one offersAccordion */
	schedulePublishOffersAccordion?: Maybe<OffersAccordion>;
	/** Schedule to publish one treatment */
	schedulePublishTreatment?: Maybe<Treatment>;
	/** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishAsset?: Maybe<Asset>;
	/** Unpublish one offersAccordion from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishOffersAccordion?: Maybe<OffersAccordion>;
	/** Unpublish one treatment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishTreatment?: Maybe<Treatment>;
	/** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishAsset?: Maybe<Asset>;
	/**
	 * Unpublish many Asset documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
	 */
	unpublishManyAssets: BatchPayload;
	/** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyAssetsConnection: AssetConnection;
	/**
	 * Unpublish many OffersAccordion documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyOffersAccordionsConnection)
	 */
	unpublishManyOffersAccordions: BatchPayload;
	/** Find many OffersAccordion documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyOffersAccordionsConnection: OffersAccordionConnection;
	/**
	 * Unpublish many Treatment documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyTreatmentsConnection)
	 */
	unpublishManyTreatments: BatchPayload;
	/** Find many Treatment documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyTreatmentsConnection: TreatmentConnection;
	/** Unpublish one offersAccordion from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishOffersAccordion?: Maybe<OffersAccordion>;
	/** Unpublish one treatment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishTreatment?: Maybe<Treatment>;
	/** Update one asset */
	updateAsset?: Maybe<Asset>;
	/**
	 * Update many assets
	 * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
	 */
	updateManyAssets: BatchPayload;
	/** Update many Asset documents */
	updateManyAssetsConnection: AssetConnection;
	/**
	 * Update many offersAccordions
	 * @deprecated Please use the new paginated many mutation (updateManyOffersAccordionsConnection)
	 */
	updateManyOffersAccordions: BatchPayload;
	/** Update many OffersAccordion documents */
	updateManyOffersAccordionsConnection: OffersAccordionConnection;
	/**
	 * Update many treatments
	 * @deprecated Please use the new paginated many mutation (updateManyTreatmentsConnection)
	 */
	updateManyTreatments: BatchPayload;
	/** Update many Treatment documents */
	updateManyTreatmentsConnection: TreatmentConnection;
	/** Update one offersAccordion */
	updateOffersAccordion?: Maybe<OffersAccordion>;
	/** Update one scheduledRelease */
	updateScheduledRelease?: Maybe<ScheduledRelease>;
	/** Update one treatment */
	updateTreatment?: Maybe<Treatment>;
	/** Upsert one asset */
	upsertAsset?: Maybe<Asset>;
	/** Upsert one offersAccordion */
	upsertOffersAccordion?: Maybe<OffersAccordion>;
	/** Upsert one treatment */
	upsertTreatment?: Maybe<Treatment>;
};

export type MutationCreateAssetArgs = {
	data: AssetCreateInput;
};

export type MutationCreateOffersAccordionArgs = {
	data: OffersAccordionCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
	data: ScheduledReleaseCreateInput;
};

export type MutationCreateTreatmentArgs = {
	data: TreatmentCreateInput;
};

export type MutationDeleteAssetArgs = {
	where: AssetWhereUniqueInput;
};

export type MutationDeleteManyAssetsArgs = {
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyOffersAccordionsArgs = {
	where?: InputMaybe<OffersAccordionManyWhereInput>;
};

export type MutationDeleteManyOffersAccordionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<OffersAccordionManyWhereInput>;
};

export type MutationDeleteManyTreatmentsArgs = {
	where?: InputMaybe<TreatmentManyWhereInput>;
};

export type MutationDeleteManyTreatmentsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<TreatmentManyWhereInput>;
};

export type MutationDeleteOffersAccordionArgs = {
	where: OffersAccordionWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
	where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
	where: ScheduledReleaseWhereUniqueInput;
};

export type MutationDeleteTreatmentArgs = {
	where: TreatmentWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	to?: Array<Stage>;
	where: AssetWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishManyAssetsArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<AssetManyWhereInput>;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<AssetManyWhereInput>;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationPublishManyOffersAccordionsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<OffersAccordionManyWhereInput>;
};

export type MutationPublishManyOffersAccordionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<OffersAccordionManyWhereInput>;
};

export type MutationPublishManyTreatmentsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<TreatmentManyWhereInput>;
};

export type MutationPublishManyTreatmentsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	to?: Array<Stage>;
	where?: InputMaybe<TreatmentManyWhereInput>;
};

export type MutationPublishOffersAccordionArgs = {
	to?: Array<Stage>;
	where: OffersAccordionWhereUniqueInput;
};

export type MutationPublishTreatmentArgs = {
	to?: Array<Stage>;
	where: TreatmentWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: AssetWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationSchedulePublishOffersAccordionArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: OffersAccordionWhereUniqueInput;
};

export type MutationSchedulePublishTreatmentArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	to?: Array<Stage>;
	where: TreatmentWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishOffersAccordionArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: OffersAccordionWhereUniqueInput;
};

export type MutationScheduleUnpublishTreatmentArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	releaseId?: InputMaybe<Scalars['String']['input']>;
	where: TreatmentWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where: AssetWhereUniqueInput;
};

export type MutationUnpublishManyAssetsArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyOffersAccordionsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<OffersAccordionManyWhereInput>;
};

export type MutationUnpublishManyOffersAccordionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<OffersAccordionManyWhereInput>;
};

export type MutationUnpublishManyTreatmentsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<TreatmentManyWhereInput>;
};

export type MutationUnpublishManyTreatmentsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<TreatmentManyWhereInput>;
};

export type MutationUnpublishOffersAccordionArgs = {
	from?: Array<Stage>;
	where: OffersAccordionWhereUniqueInput;
};

export type MutationUnpublishTreatmentArgs = {
	from?: Array<Stage>;
	where: TreatmentWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
	data: AssetUpdateInput;
	where: AssetWhereUniqueInput;
};

export type MutationUpdateManyAssetsArgs = {
	data: AssetUpdateManyInput;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: AssetUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyOffersAccordionsArgs = {
	data: OffersAccordionUpdateManyInput;
	where?: InputMaybe<OffersAccordionManyWhereInput>;
};

export type MutationUpdateManyOffersAccordionsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: OffersAccordionUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<OffersAccordionManyWhereInput>;
};

export type MutationUpdateManyTreatmentsArgs = {
	data: TreatmentUpdateManyInput;
	where?: InputMaybe<TreatmentManyWhereInput>;
};

export type MutationUpdateManyTreatmentsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']['input']>;
	before?: InputMaybe<Scalars['ID']['input']>;
	data: TreatmentUpdateManyInput;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<TreatmentManyWhereInput>;
};

export type MutationUpdateOffersAccordionArgs = {
	data: OffersAccordionUpdateInput;
	where: OffersAccordionWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
	data: ScheduledReleaseUpdateInput;
	where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpdateTreatmentArgs = {
	data: TreatmentUpdateInput;
	where: TreatmentWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
	upsert: AssetUpsertInput;
	where: AssetWhereUniqueInput;
};

export type MutationUpsertOffersAccordionArgs = {
	upsert: OffersAccordionUpsertInput;
	where: OffersAccordionWhereUniqueInput;
};

export type MutationUpsertTreatmentArgs = {
	upsert: TreatmentUpsertInput;
	where: TreatmentWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
	/** The id of the object. */
	id: Scalars['ID']['output'];
	/** The Stage of an object */
	stage: Stage;
};

export type OffersAccordion = Entity &
	Node & {
		content?: Maybe<Scalars['String']['output']>;
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<OffersAccordion>;
		/** List of OffersAccordion versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		/** System stage field */
		stage: Stage;
		title?: Maybe<Scalars['String']['output']>;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

export type OffersAccordionCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type OffersAccordionDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type OffersAccordionHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

export type OffersAccordionPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type OffersAccordionScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type OffersAccordionUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type OffersAccordionConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: OffersAccordionWhereUniqueInput;
};

/** A connection to a list of items. */
export type OffersAccordionConnection = {
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<OffersAccordionEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type OffersAccordionCreateInput = {
	content?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OffersAccordionCreateManyInlineInput = {
	/** Connect multiple existing OffersAccordion documents */
	connect?: InputMaybe<Array<OffersAccordionWhereUniqueInput>>;
	/** Create and connect multiple existing OffersAccordion documents */
	create?: InputMaybe<Array<OffersAccordionCreateInput>>;
};

export type OffersAccordionCreateOneInlineInput = {
	/** Connect one existing OffersAccordion document */
	connect?: InputMaybe<OffersAccordionWhereUniqueInput>;
	/** Create and connect one OffersAccordion document */
	create?: InputMaybe<OffersAccordionCreateInput>;
};

/** An edge in a connection. */
export type OffersAccordionEdge = {
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: OffersAccordion;
};

/** Identifies documents */
export type OffersAccordionManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<OffersAccordionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<OffersAccordionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<OffersAccordionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	content?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	content_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	content_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	content_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	content_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	content_starts_with?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<OffersAccordionWhereStageInput>;
	documentInStages_none?: InputMaybe<OffersAccordionWhereStageInput>;
	documentInStages_some?: InputMaybe<OffersAccordionWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type OffersAccordionOrderByInput =
	| 'content_ASC'
	| 'content_DESC'
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'id_ASC'
	| 'id_DESC'
	| 'publishedAt_ASC'
	| 'publishedAt_DESC'
	| 'title_ASC'
	| 'title_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type OffersAccordionUpdateInput = {
	content?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type OffersAccordionUpdateManyInlineInput = {
	/** Connect multiple existing OffersAccordion documents */
	connect?: InputMaybe<Array<OffersAccordionConnectInput>>;
	/** Create and connect multiple OffersAccordion documents */
	create?: InputMaybe<Array<OffersAccordionCreateInput>>;
	/** Delete multiple OffersAccordion documents */
	delete?: InputMaybe<Array<OffersAccordionWhereUniqueInput>>;
	/** Disconnect multiple OffersAccordion documents */
	disconnect?: InputMaybe<Array<OffersAccordionWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing OffersAccordion documents */
	set?: InputMaybe<Array<OffersAccordionWhereUniqueInput>>;
	/** Update multiple OffersAccordion documents */
	update?: InputMaybe<Array<OffersAccordionUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple OffersAccordion documents */
	upsert?: InputMaybe<Array<OffersAccordionUpsertWithNestedWhereUniqueInput>>;
};

export type OffersAccordionUpdateManyInput = {
	content?: InputMaybe<Scalars['String']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type OffersAccordionUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: OffersAccordionUpdateManyInput;
	/** Document search */
	where: OffersAccordionWhereInput;
};

export type OffersAccordionUpdateOneInlineInput = {
	/** Connect existing OffersAccordion document */
	connect?: InputMaybe<OffersAccordionWhereUniqueInput>;
	/** Create and connect one OffersAccordion document */
	create?: InputMaybe<OffersAccordionCreateInput>;
	/** Delete currently connected OffersAccordion document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected OffersAccordion document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single OffersAccordion document */
	update?: InputMaybe<OffersAccordionUpdateWithNestedWhereUniqueInput>;
	/** Upsert single OffersAccordion document */
	upsert?: InputMaybe<OffersAccordionUpsertWithNestedWhereUniqueInput>;
};

export type OffersAccordionUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: OffersAccordionUpdateInput;
	/** Unique document search */
	where: OffersAccordionWhereUniqueInput;
};

export type OffersAccordionUpsertInput = {
	/** Create document if it didn't exist */
	create: OffersAccordionCreateInput;
	/** Update document if it exists */
	update: OffersAccordionUpdateInput;
};

export type OffersAccordionUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: OffersAccordionUpsertInput;
	/** Unique document search */
	where: OffersAccordionWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type OffersAccordionWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type OffersAccordionWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<OffersAccordionWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<OffersAccordionWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<OffersAccordionWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	content?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	content_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	content_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	content_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	content_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	content_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	content_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	content_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	content_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	content_starts_with?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<OffersAccordionWhereStageInput>;
	documentInStages_none?: InputMaybe<OffersAccordionWhereStageInput>;
	documentInStages_some?: InputMaybe<OffersAccordionWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type OffersAccordionWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<OffersAccordionWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<OffersAccordionWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<OffersAccordionWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<OffersAccordionWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References OffersAccordion record uniquely */
export type OffersAccordionWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars['String']['output']>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean']['output'];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean']['output'];
	/** Number of items in the current page. */
	pageSize?: Maybe<Scalars['Int']['output']>;
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars['String']['output']>;
};

export type PublishLocaleInput = {
	/** Locales to publish */
	locale: Locale;
	/** Stages to publish selected locales to */
	stages: Array<Stage>;
};

export type Query = {
	/** Retrieve a single asset */
	asset?: Maybe<Asset>;
	/** Retrieve document version */
	assetVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple assets */
	assets: Array<Asset>;
	/** Retrieve multiple assets using the Relay connection interface */
	assetsConnection: AssetConnection;
	/** Fetches an object given its ID */
	entities?: Maybe<Array<Entity>>;
	/** Fetches an object given its ID */
	node?: Maybe<Node>;
	/** Retrieve a single offersAccordion */
	offersAccordion?: Maybe<OffersAccordion>;
	/** Retrieve document version */
	offersAccordionVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple offersAccordions */
	offersAccordions: Array<OffersAccordion>;
	/** Retrieve multiple offersAccordions using the Relay connection interface */
	offersAccordionsConnection: OffersAccordionConnection;
	/** Retrieve a single scheduledOperation */
	scheduledOperation?: Maybe<ScheduledOperation>;
	/** Retrieve multiple scheduledOperations */
	scheduledOperations: Array<ScheduledOperation>;
	/** Retrieve multiple scheduledOperations using the Relay connection interface */
	scheduledOperationsConnection: ScheduledOperationConnection;
	/** Retrieve a single scheduledRelease */
	scheduledRelease?: Maybe<ScheduledRelease>;
	/** Retrieve multiple scheduledReleases */
	scheduledReleases: Array<ScheduledRelease>;
	/** Retrieve multiple scheduledReleases using the Relay connection interface */
	scheduledReleasesConnection: ScheduledReleaseConnection;
	/** Retrieve a single treatment */
	treatment?: Maybe<Treatment>;
	/** Retrieve document version */
	treatmentVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple treatments */
	treatments: Array<Treatment>;
	/** Retrieve multiple treatments using the Relay connection interface */
	treatmentsConnection: TreatmentConnection;
	/** Retrieve a single user */
	user?: Maybe<User>;
	/** Retrieve multiple users */
	users: Array<User>;
	/** Retrieve multiple users using the Relay connection interface */
	usersConnection: UserConnection;
};

export type QueryAssetArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
	where: VersionWhereInput;
};

export type QueryAssetsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AssetOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AssetOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<AssetWhereInput>;
};

export type QueryEntitiesArgs = {
	where: Array<EntityWhereInput>;
};

export type QueryNodeArgs = {
	id: Scalars['ID']['input'];
	locales?: Array<Locale>;
	stage?: Stage;
};

export type QueryOffersAccordionArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: OffersAccordionWhereUniqueInput;
};

export type QueryOffersAccordionVersionArgs = {
	where: VersionWhereInput;
};

export type QueryOffersAccordionsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<OffersAccordionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<OffersAccordionWhereInput>;
};

export type QueryOffersAccordionsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<OffersAccordionOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<OffersAccordionWhereInput>;
};

export type QueryScheduledOperationArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryTreatmentArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: TreatmentWhereUniqueInput;
};

export type QueryTreatmentVersionArgs = {
	where: VersionWhereInput;
};

export type QueryTreatmentsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<TreatmentOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<TreatmentWhereInput>;
};

export type QueryTreatmentsConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<TreatmentOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<TreatmentWhereInput>;
};

export type QueryUserArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<UserOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<UserOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	stage?: Stage;
	where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
	a: Scalars['RGBATransparency']['output'];
	b: Scalars['RGBAHue']['output'];
	g: Scalars['RGBAHue']['output'];
	r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
	a: Scalars['RGBATransparency']['input'];
	b: Scalars['RGBAHue']['input'];
	g: Scalars['RGBAHue']['input'];
	r: Scalars['RGBAHue']['input'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
	/** Returns HTMl representation */
	html: Scalars['String']['output'];
	/** Returns Markdown representation */
	markdown: Scalars['String']['output'];
	/** Returns AST representation */
	raw: Scalars['RichTextAST']['output'];
	/** Returns plain-text contents of RichText */
	text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity &
	Node & {
		affectedDocuments: Array<ScheduledOperationAffectedDocument>;
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Operation description */
		description?: Maybe<Scalars['String']['output']>;
		/** Get the document in other stages */
		documentInStages: Array<ScheduledOperation>;
		/** Operation error message */
		errorMessage?: Maybe<Scalars['String']['output']>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		/** Raw operation payload including all details, this field is subject to change */
		rawPayload: Scalars['Json']['output'];
		/** The release this operation is scheduled for */
		release?: Maybe<ScheduledRelease>;
		/** System stage field */
		stage: Stage;
		/** operation Status */
		status: ScheduledOperationStatus;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument =
	| Asset
	| OffersAccordion
	| Treatment;

export type ScheduledOperationConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ScheduledOperationEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
	/** Connect multiple existing ScheduledOperation documents */
	connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
	/** Connect one existing ScheduledOperation document */
	connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	/** All values containing the given json path. */
	rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Recursively tries to find the provided JSON scalar value inside the field.
	 * It does use an exact match when comparing values.
	 * If you pass `null` as value the filter will be ignored.
	 * Note: This filter fails if you try to look for a non scalar JSON value!
	 */
	rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
	release?: InputMaybe<ScheduledReleaseWhereInput>;
	status?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type ScheduledOperationOrderByInput =
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'description_ASC'
	| 'description_DESC'
	| 'errorMessage_ASC'
	| 'errorMessage_DESC'
	| 'id_ASC'
	| 'id_DESC'
	| 'publishedAt_ASC'
	| 'publishedAt_DESC'
	| 'status_ASC'
	| 'status_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

/** System Scheduled Operation Status */
export type ScheduledOperationStatus =
	| 'CANCELED'
	| 'COMPLETED'
	| 'FAILED'
	| 'IN_PROGRESS'
	| 'PENDING';

export type ScheduledOperationUpdateManyInlineInput = {
	/** Connect multiple existing ScheduledOperation documents */
	connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
	/** Disconnect multiple ScheduledOperation documents */
	disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ScheduledOperation documents */
	set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
	/** Connect existing ScheduledOperation document */
	connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
	/** Disconnect currently connected ScheduledOperation document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	/** All values containing the given json path. */
	rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
	/**
	 * Recursively tries to find the provided JSON scalar value inside the field.
	 * It does use an exact match when comparing values.
	 * If you pass `null` as value the filter will be ignored.
	 * Note: This filter fails if you try to look for a non scalar JSON value!
	 */
	rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
	release?: InputMaybe<ScheduledReleaseWhereInput>;
	status?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity &
	Node & {
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Release description */
		description?: Maybe<Scalars['String']['output']>;
		/** Get the document in other stages */
		documentInStages: Array<ScheduledRelease>;
		/** Release error message */
		errorMessage?: Maybe<Scalars['String']['output']>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** Whether scheduled release should be run */
		isActive: Scalars['Boolean']['output'];
		/** Whether scheduled release is implicit */
		isImplicit: Scalars['Boolean']['output'];
		/** Operations to run with this release */
		operations: Array<ScheduledOperation>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		/** Release date and time */
		releaseAt?: Maybe<Scalars['DateTime']['output']>;
		/** System stage field */
		stage: Stage;
		/** Release Status */
		status: ScheduledReleaseStatus;
		/** Release Title */
		title?: Maybe<Scalars['String']['output']>;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ScheduledReleaseEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	description?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
	/** Connect multiple existing ScheduledRelease documents */
	connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Create and connect multiple existing ScheduledRelease documents */
	create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
	/** Connect one existing ScheduledRelease document */
	connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
	/** Create and connect one ScheduledRelease document */
	create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
	isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
	operations_every?: InputMaybe<ScheduledOperationWhereInput>;
	operations_none?: InputMaybe<ScheduledOperationWhereInput>;
	operations_some?: InputMaybe<ScheduledOperationWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	releaseAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	status?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type ScheduledReleaseOrderByInput =
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'description_ASC'
	| 'description_DESC'
	| 'errorMessage_ASC'
	| 'errorMessage_DESC'
	| 'id_ASC'
	| 'id_DESC'
	| 'isActive_ASC'
	| 'isActive_DESC'
	| 'isImplicit_ASC'
	| 'isImplicit_DESC'
	| 'publishedAt_ASC'
	| 'publishedAt_DESC'
	| 'releaseAt_ASC'
	| 'releaseAt_DESC'
	| 'status_ASC'
	| 'status_DESC'
	| 'title_ASC'
	| 'title_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

/** System Scheduled Release Status */
export type ScheduledReleaseStatus =
	| 'COMPLETED'
	| 'FAILED'
	| 'IN_PROGRESS'
	| 'PENDING';

export type ScheduledReleaseUpdateInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
	/** Connect multiple existing ScheduledRelease documents */
	connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
	/** Create and connect multiple ScheduledRelease documents */
	create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
	/** Delete multiple ScheduledRelease documents */
	delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Disconnect multiple ScheduledRelease documents */
	disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ScheduledRelease documents */
	set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Update multiple ScheduledRelease documents */
	update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple ScheduledRelease documents */
	upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
	description?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ScheduledReleaseUpdateManyInput;
	/** Document search */
	where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
	/** Connect existing ScheduledRelease document */
	connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
	/** Create and connect one ScheduledRelease document */
	create?: InputMaybe<ScheduledReleaseCreateInput>;
	/** Delete currently connected ScheduledRelease document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected ScheduledRelease document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single ScheduledRelease document */
	update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ScheduledRelease document */
	upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ScheduledReleaseUpdateInput;
	/** Unique document search */
	where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
	/** Create document if it didn't exist */
	create: ScheduledReleaseCreateInput;
	/** Update document if it exists */
	update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ScheduledReleaseUpsertInput;
	/** Unique document search */
	where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	description_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']['input']>;
	errorMessage?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	errorMessage_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['String']['input']>>
	>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
	isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
	operations_every?: InputMaybe<ScheduledOperationWhereInput>;
	operations_none?: InputMaybe<ScheduledOperationWhereInput>;
	operations_some?: InputMaybe<ScheduledOperationWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	releaseAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	status?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	/** Any other value that exists and is not equal to the given value. */
	status_not?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

/** Stage system enumeration */
export type Stage =
	/** The Draft is the default stage for all your content. */
	| 'DRAFT'
	/** The Published stage is where you can publish your content to. */
	| 'PUBLISHED';

export type SystemDateTimeFieldVariation = 'BASE' | 'COMBINED' | 'LOCALIZATION';

export type Treatment = Entity &
	Node & {
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** User that created this document */
		createdBy?: Maybe<User>;
		/** Get the document in other stages */
		documentInStages: Array<Treatment>;
		/** List of Treatment versions */
		history: Array<Version>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** User that last published this document */
		publishedBy?: Maybe<User>;
		scheduledIn: Array<ScheduledOperation>;
		/** System stage field */
		stage: Stage;
		title?: Maybe<Scalars['String']['output']>;
		treatmentContent?: Maybe<RichText>;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
		/** User that last updated this document */
		updatedBy?: Maybe<User>;
	};

export type TreatmentCreatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type TreatmentDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type TreatmentHistoryArgs = {
	limit?: Scalars['Int']['input'];
	skip?: Scalars['Int']['input'];
	stageOverride?: InputMaybe<Stage>;
};

export type TreatmentPublishedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type TreatmentScheduledInArgs = {
	after?: InputMaybe<Scalars['String']['input']>;
	before?: InputMaybe<Scalars['String']['input']>;
	first?: InputMaybe<Scalars['Int']['input']>;
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']['input']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type TreatmentUpdatedByArgs = {
	forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
	locales?: InputMaybe<Array<Locale>>;
};

export type TreatmentConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: TreatmentWhereUniqueInput;
};

/** A connection to a list of items. */
export type TreatmentConnection = {
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<TreatmentEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type TreatmentCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	title?: InputMaybe<Scalars['String']['input']>;
	treatmentContent?: InputMaybe<Scalars['RichTextAST']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TreatmentCreateManyInlineInput = {
	/** Connect multiple existing Treatment documents */
	connect?: InputMaybe<Array<TreatmentWhereUniqueInput>>;
	/** Create and connect multiple existing Treatment documents */
	create?: InputMaybe<Array<TreatmentCreateInput>>;
};

export type TreatmentCreateOneInlineInput = {
	/** Connect one existing Treatment document */
	connect?: InputMaybe<TreatmentWhereUniqueInput>;
	/** Create and connect one Treatment document */
	create?: InputMaybe<TreatmentCreateInput>;
};

/** An edge in a connection. */
export type TreatmentEdge = {
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: Treatment;
};

/** Identifies documents */
export type TreatmentManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<TreatmentWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<TreatmentWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<TreatmentWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<TreatmentWhereStageInput>;
	documentInStages_none?: InputMaybe<TreatmentWhereStageInput>;
	documentInStages_some?: InputMaybe<TreatmentWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type TreatmentOrderByInput =
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'id_ASC'
	| 'id_DESC'
	| 'publishedAt_ASC'
	| 'publishedAt_DESC'
	| 'title_ASC'
	| 'title_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type TreatmentUpdateInput = {
	title?: InputMaybe<Scalars['String']['input']>;
	treatmentContent?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type TreatmentUpdateManyInlineInput = {
	/** Connect multiple existing Treatment documents */
	connect?: InputMaybe<Array<TreatmentConnectInput>>;
	/** Create and connect multiple Treatment documents */
	create?: InputMaybe<Array<TreatmentCreateInput>>;
	/** Delete multiple Treatment documents */
	delete?: InputMaybe<Array<TreatmentWhereUniqueInput>>;
	/** Disconnect multiple Treatment documents */
	disconnect?: InputMaybe<Array<TreatmentWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Treatment documents */
	set?: InputMaybe<Array<TreatmentWhereUniqueInput>>;
	/** Update multiple Treatment documents */
	update?: InputMaybe<Array<TreatmentUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Treatment documents */
	upsert?: InputMaybe<Array<TreatmentUpsertWithNestedWhereUniqueInput>>;
};

export type TreatmentUpdateManyInput = {
	title?: InputMaybe<Scalars['String']['input']>;
	treatmentContent?: InputMaybe<Scalars['RichTextAST']['input']>;
};

export type TreatmentUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: TreatmentUpdateManyInput;
	/** Document search */
	where: TreatmentWhereInput;
};

export type TreatmentUpdateOneInlineInput = {
	/** Connect existing Treatment document */
	connect?: InputMaybe<TreatmentWhereUniqueInput>;
	/** Create and connect one Treatment document */
	create?: InputMaybe<TreatmentCreateInput>;
	/** Delete currently connected Treatment document */
	delete?: InputMaybe<Scalars['Boolean']['input']>;
	/** Disconnect currently connected Treatment document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
	/** Update single Treatment document */
	update?: InputMaybe<TreatmentUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Treatment document */
	upsert?: InputMaybe<TreatmentUpsertWithNestedWhereUniqueInput>;
};

export type TreatmentUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: TreatmentUpdateInput;
	/** Unique document search */
	where: TreatmentWhereUniqueInput;
};

export type TreatmentUpsertInput = {
	/** Create document if it didn't exist */
	create: TreatmentCreateInput;
	/** Update document if it exists */
	update: TreatmentUpdateInput;
};

export type TreatmentUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: TreatmentUpsertInput;
	/** Unique document search */
	where: TreatmentWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TreatmentWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type TreatmentWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<TreatmentWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<TreatmentWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<TreatmentWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	createdBy?: InputMaybe<UserWhereInput>;
	documentInStages_every?: InputMaybe<TreatmentWhereStageInput>;
	documentInStages_none?: InputMaybe<TreatmentWhereStageInput>;
	documentInStages_some?: InputMaybe<TreatmentWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	title?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	title_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TreatmentWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<TreatmentWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<TreatmentWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<TreatmentWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<TreatmentWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References Treatment record uniquely */
export type TreatmentWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type UnpublishLocaleInput = {
	/** Locales to unpublish */
	locale: Locale;
	/** Stages to unpublish selected locales from */
	stages: Array<Stage>;
};

/** User system model */
export type User = Entity &
	Node & {
		/** The time the document was created */
		createdAt: Scalars['DateTime']['output'];
		/** Get the document in other stages */
		documentInStages: Array<User>;
		/** The unique identifier */
		id: Scalars['ID']['output'];
		/** Flag to determine if user is active or not */
		isActive: Scalars['Boolean']['output'];
		/** User Kind. Can be either MEMBER, PAT or PUBLIC */
		kind: UserKind;
		/** The username */
		name: Scalars['String']['output'];
		/** Profile Picture url */
		picture?: Maybe<Scalars['String']['output']>;
		/** The time the document was published. Null on documents in draft stage. */
		publishedAt?: Maybe<Scalars['DateTime']['output']>;
		/** System stage field */
		stage: Stage;
		/** The time the document was updated */
		updatedAt: Scalars['DateTime']['output'];
	};

/** User system model */
export type UserDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean']['input'];
	inheritLocale?: Scalars['Boolean']['input'];
	stages?: Array<Stage>;
};

export type UserConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<UserEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
	/** Connect multiple existing User documents */
	connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
	/** Connect one existing User document */
	connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
	/** A cursor for use in pagination. */
	cursor: Scalars['String']['output'];
	/** The item at the end of the edge. */
	node: User;
};

/** System User Kind */
export type UserKind = 'APP_TOKEN' | 'MEMBER' | 'PAT' | 'PUBLIC' | 'WEBHOOK';

/** Identifies documents */
export type UserManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	documentInStages_every?: InputMaybe<UserWhereStageInput>;
	documentInStages_none?: InputMaybe<UserWhereStageInput>;
	documentInStages_some?: InputMaybe<UserWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<UserKind>;
	/** All values that are contained in given list. */
	kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	/** Any other value that exists and is not equal to the given value. */
	kind_not?: InputMaybe<UserKind>;
	/** All values that are not contained in given list. */
	kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	name?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']['input']>;
	picture?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	picture_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	picture_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	picture_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	picture_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	picture_starts_with?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
};

export type UserOrderByInput =
	| 'createdAt_ASC'
	| 'createdAt_DESC'
	| 'id_ASC'
	| 'id_DESC'
	| 'isActive_ASC'
	| 'isActive_DESC'
	| 'kind_ASC'
	| 'kind_DESC'
	| 'name_ASC'
	| 'name_DESC'
	| 'picture_ASC'
	| 'picture_DESC'
	| 'publishedAt_ASC'
	| 'publishedAt_DESC'
	| 'updatedAt_ASC'
	| 'updatedAt_DESC';

export type UserUpdateManyInlineInput = {
	/** Connect multiple existing User documents */
	connect?: InputMaybe<Array<UserConnectInput>>;
	/** Disconnect multiple User documents */
	disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing User documents */
	set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
	/** Connect existing User document */
	connect?: InputMaybe<UserWhereUniqueInput>;
	/** Disconnect currently connected User document */
	disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
	/** This field can be used to request to check if the entry is outdated by internal comparison */
	outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']['input']>;
	createdAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	documentInStages_every?: InputMaybe<UserWhereStageInput>;
	documentInStages_none?: InputMaybe<UserWhereStageInput>;
	documentInStages_some?: InputMaybe<UserWhereStageInput>;
	id?: InputMaybe<Scalars['ID']['input']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	id_not?: InputMaybe<Scalars['ID']['input']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']['input']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']['input']>;
	isActive?: InputMaybe<Scalars['Boolean']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
	kind?: InputMaybe<UserKind>;
	/** All values that are contained in given list. */
	kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	/** Any other value that exists and is not equal to the given value. */
	kind_not?: InputMaybe<UserKind>;
	/** All values that are not contained in given list. */
	kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
	name?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	name_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']['input']>;
	picture?: InputMaybe<Scalars['String']['input']>;
	/** All values containing the given string. */
	picture_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values ending with the given string. */
	picture_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are contained in given list. */
	picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** Any other value that exists and is not equal to the given value. */
	picture_not?: InputMaybe<Scalars['String']['input']>;
	/** All values not containing the given string. */
	picture_not_contains?: InputMaybe<Scalars['String']['input']>;
	/** All values not ending with the given string */
	picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
	/** All values that are not contained in given list. */
	picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
	/** All values not starting with the given string. */
	picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
	/** All values starting with the given string. */
	picture_starts_with?: InputMaybe<Scalars['String']['input']>;
	publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
	updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
	/** Any other value that exists and is not equal to the given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<
		Array<InputMaybe<Scalars['DateTime']['input']>>
	>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereStageInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereStageInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereStageInput>>;
	/** This field contains fields which can be set as true or false to specify an internal comparison */
	compareWithParent?: InputMaybe<UserWhereComparatorInput>;
	/** Specify the stage to compare with */
	stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
	createdAt: Scalars['DateTime']['output'];
	id: Scalars['ID']['output'];
	revision: Scalars['Int']['output'];
	stage: Stage;
};

export type VersionWhereInput = {
	id: Scalars['ID']['input'];
	revision: Scalars['Int']['input'];
	stage: Stage;
};

export type _FilterKind =
	| 'AND'
	| 'NOT'
	| 'OR'
	| 'contains'
	| 'contains_all'
	| 'contains_none'
	| 'contains_some'
	| 'ends_with'
	| 'eq'
	| 'eq_not'
	| 'gt'
	| 'gte'
	| 'in'
	| 'json_path_exists'
	| 'json_value_recursive'
	| 'lt'
	| 'lte'
	| 'not_contains'
	| 'not_ends_with'
	| 'not_in'
	| 'not_starts_with'
	| 'relational_every'
	| 'relational_none'
	| 'relational_single'
	| 'relational_some'
	| 'search'
	| 'starts_with'
	| 'union_empty'
	| 'union_every'
	| 'union_none'
	| 'union_single'
	| 'union_some';

export type _MutationInputFieldKind =
	| 'enum'
	| 'relation'
	| 'richText'
	| 'richTextWithEmbeds'
	| 'scalar'
	| 'union'
	| 'virtual';

export type _MutationKind =
	| 'create'
	| 'delete'
	| 'deleteMany'
	| 'publish'
	| 'publishMany'
	| 'schedulePublish'
	| 'scheduleUnpublish'
	| 'unpublish'
	| 'unpublishMany'
	| 'update'
	| 'updateMany'
	| 'upsert';

export type _OrderDirection = 'asc' | 'desc';

export type _RelationInputCardinality = 'many' | 'one';

export type _RelationInputKind = 'create' | 'update';

export type _RelationKind = 'regular' | 'union';

export type _SystemDateTimeFieldVariation =
	| 'base'
	| 'combined'
	| 'localization';

export type OffersAccordionsQueryVariables = Exact<{ [key: string]: never }>;

export type OffersAccordionsQuery = {
	offersAccordions: Array<{
		id: string;
		title?: string | null;
		content?: string | null;
	}>;
};

export type OffersAccordionFragment = {
	id: string;
	title?: string | null;
	content?: string | null;
};

export type TreatmentsGetListQueryVariables = Exact<{ [key: string]: never }>;

export type TreatmentsGetListQuery = {
	treatments: Array<{
		id: string;
		title?: string | null;
		treatmentContent?: { raw: unknown } | null;
	}>;
};

export type TreatmentFragment = {
	id: string;
	title?: string | null;
	treatmentContent?: { raw: unknown } | null;
};

export class TypedDocumentString<TResult, TVariables>
	extends String
	implements DocumentTypeDecoration<TResult, TVariables>
{
	__apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

	constructor(
		private value: string,
		public __meta__?: Record<string, any>,
	) {
		super(value);
	}

	toString(): string & DocumentTypeDecoration<TResult, TVariables> {
		return this.value;
	}
}
export const OffersAccordionFragmentDoc = new TypedDocumentString(
	`
    fragment OffersAccordion on OffersAccordion {
  id
  title
  content
}
    `,
	{ fragmentName: 'OffersAccordion' },
) as unknown as TypedDocumentString<OffersAccordionFragment, unknown>;
export const TreatmentFragmentDoc = new TypedDocumentString(
	`
    fragment Treatment on Treatment {
  id
  title
  treatmentContent {
    raw
  }
}
    `,
	{ fragmentName: 'Treatment' },
) as unknown as TypedDocumentString<TreatmentFragment, unknown>;
export const OffersAccordionsDocument = new TypedDocumentString(`
    query OffersAccordions {
  offersAccordions {
    ...OffersAccordion
  }
}
    fragment OffersAccordion on OffersAccordion {
  id
  title
  content
}`) as unknown as TypedDocumentString<
	OffersAccordionsQuery,
	OffersAccordionsQueryVariables
>;
export const TreatmentsGetListDocument = new TypedDocumentString(`
    query TreatmentsGetList {
  treatments {
    ...Treatment
  }
}
    fragment Treatment on Treatment {
  id
  title
  treatmentContent {
    raw
  }
}`) as unknown as TypedDocumentString<
	TreatmentsGetListQuery,
	TreatmentsGetListQueryVariables
>;
