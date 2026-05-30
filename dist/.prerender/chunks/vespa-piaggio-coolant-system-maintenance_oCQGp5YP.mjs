async function getMod() {
						return import('./vespa-piaggio-coolant-system-maintenance_BL2N-A19.mjs');
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
