/* eslint-disable */
import * as types from './graphql';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
	'query OffersAccordions {\n  offersAccordions {\n    ...OffersAccordion\n  }\n}':
		types.OffersAccordionsDocument,
	'fragment OffersAccordion on OffersAccordion {\n  id\n  title\n  content\n}':
		types.OffersAccordionFragmentDoc,
	'query TreatmentsGetList {\n  treatments {\n    ...Treatment\n  }\n}':
		types.TreatmentsGetListDocument,
	'fragment Treatment on Treatment {\n  id\n  title\n  treatmentContent {\n    raw\n  }\n}':
		types.TreatmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query OffersAccordions {\n  offersAccordions {\n    ...OffersAccordion\n  }\n}',
): typeof import('./graphql').OffersAccordionsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'fragment OffersAccordion on OffersAccordion {\n  id\n  title\n  content\n}',
): typeof import('./graphql').OffersAccordionFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'query TreatmentsGetList {\n  treatments {\n    ...Treatment\n  }\n}',
): typeof import('./graphql').TreatmentsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: 'fragment Treatment on Treatment {\n  id\n  title\n  treatmentContent {\n    raw\n  }\n}',
): typeof import('./graphql').TreatmentFragmentDoc;

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}
