# Local Fonts

The site hosts its Latin webfont subsets locally so typography remains stable
without a runtime or build-time request to Google Fonts.

- Fraunces: SIL Open Font License 1.1
- Inter: SIL Open Font License 1.1
- Source Serif 4: SIL Open Font License 1.1

Source projects:

- https://github.com/undercasetype/Fraunces
- https://github.com/rsms/inter
- https://github.com/adobe-fonts/source-serif

Do not replace these files with remote CSS imports. When updating a font, commit
the new WOFF2 file and its licence alongside the code change, then visually
compare headings, controls, line wrapping, and article italics.
