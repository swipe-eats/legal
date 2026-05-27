export type LegalDocumentSlug = "terms-and-conditions" | "privacy-policy";

export type LegalBlock =
	| {
			type: "paragraph";
			text: string;
	  }
	| {
			type: "subheading";
			text: string;
	  }
	| {
			type: "list";
			items: readonly string[];
	  };

export type LegalSection = {
	heading: string;
	blocks: readonly LegalBlock[];
};

export type LegalDocument = {
	slug: LegalDocumentSlug;
	title: string;
	version: string;
	effectiveDate: string;
	intro: readonly LegalBlock[];
	sections: readonly LegalSection[];
};
