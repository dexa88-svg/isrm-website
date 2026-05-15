# Diagnostic Wizard Decision Tree — Revision v4

**Date:** 2026-05-15  
**Author:** Den  
**Status:** PROPOSED — Ready for Implementation

---

## Summary of Changes

This revision adds two major improvements to the wizard:

1. **New intermediate node after "No crank"**: Distinguishes between **"No crank"** (electrical/relay/starter failure) and **"Cranks/rotates but won't fire"** (ignition/fuel/compression fault).
   
2. **Expanded diagnostic paths** for both carbureted and EFI no-start cases with additional granularity.

---

## Root Level (Unchanged)

```
root:
  ✓ Does your scooter start?
    → Yes — but something is wrong        [next: runs_carb_efi]
    → No — won't start at all             [next: no_start]  ← MODIFIED
```

---

## Branch A: Won't Start (REVISED)

### Level 1: Startup Behavior

**CURRENT NODE: `no_start`**  
Splits into: Does engine crank?

```
no_start:
  ✓ Does the engine crank (turn over)?
    → No — silent or click              [next: no_crank]
    → Yes — cranks but won't fire       [next: cranks_fuel_type]  ← EXISTING PATH (unchanged)
```

### Level 2A: No Crank Path (NO CHANGES)

This path remains identical — electrical/relay/battery/starter issues.

```
no_crank → [silence_lights] → [kill_switch_check] → [various diag nodes]
         → [single heavy click] → diag_relay_click
         → [rapid clicking] → diag_battery_weak
         → [grinding/whirs] → diag_starter_gear
```

### Level 2B: Cranks But Won't Fire (REVISED & EXPANDED)

**NEW CLARIFICATION NODE:**

```
cranks_fuel_type:
  ✓ Is your fuel system a carburetor or EFI (fuel injection)?
    → Carburetor              [next: carb_no_start_entry]
    → EFI / fuel injection    [next: efi_no_start_entry]
```

---

## Path B.1: Carburetor No-Start (EXPANDED)

### NEW: Initial Choke/Spark Triage

Instead of jumping straight to "choke test," we now ask:

```
carb_no_start_entry: (NEW)
  icon: 🔩
  question: "When you try to start, do you smell fuel in the exhaust?"
  hint: "This tells us if fuel is reaching the engine at all. Strong fuel smell = fuel present; none = fuel supply issue."
  answers:
    → Yes — strong fuel smell             [next: carb_choke_test]         ← FUEL IS REACHING
    → No — no smell at all                [next: carb_fuel_first]         ← FUEL NOT REACHING
    → Not sure                            [next: carb_choke_test]         ← DEFAULT TO CHOKE TEST
```

### NEW: Fuel Check First (If no smell)

```
carb_fuel_first: (NEW)
  icon: ⛽
  question: "First, check fuel is reaching the carb. Turn fuel tap ON/RES, crank 10 seconds, then smell the plug hole."
  hint: "Remove spark plug and crank while inhaling near the hole. Even after 10 seconds of cranking, you should smell raw fuel if the supply is working."
  answers:
    → Now I smell fuel             [next: carb_choke_test]             ← FUEL CONFIRMED, TEST CHOKE
    → Still no smell — fuel dead   [next: carb_no_fuel_supply]         ← FUEL NOT GETTING THROUGH
```

### EXISTING: Choke Test (Unchanged)

```
carb_choke_test: (EXISTING)
  ✓ Does it briefly fire or pop with the choke pulled fully on?
    → Yes — briefly fires/coughs           [next: diag_carb_lean]
    → No — nothing at all                  [next: carb_spark_test]
```

### EXISTING: Spark Test (Unchanged)

```
carb_spark_test: (EXISTING)
  ✓ Spark test: strong spark?
    → Strong blue spark                    [next: carb_fuel_check]
    → Weak / yellow spark                 [next: carb_new_plug_weak]
    → No spark at all                      [next: carb_no_spark_plug]
```

### EXISTING: Fuel & Compression Checks (Unchanged)

```
carb_fuel_check: (EXISTING) — As currently defined
carb_compression: (EXISTING) — As currently defined
```

---

## Path B.2: EFI No-Start (EXPANDED)

### NEW: Pre-Pump Check

```
efi_no_start_entry: (NEW)
  icon: ⚡
  question: "On key-ON (before pressing start), do you see any CEL/fault lamp flash or glow on the dash?"
  hint: "Turn key to ON position, wait 2 seconds. EFI systems should perform a brief self-test. Note: lamp may not flash if battery is below 11 V."
  answers:
    → Yes — lamp flashes/glows             [next: efi_cel_diagnostic]    ← ECU HAS POWER & IS RUNNING SELF-TEST
    → No — no lamp response at all        [next: efi_power_check]       ← ECU NOT POWERED OR DISABLED
    → Unsure                              [next: efi_pump_prime]        ← PROCEED TO PUMP TEST
```

### NEW: ECU Power Check

```
efi_power_check: (NEW)
  icon: 🔋
  question: "Is the key-ON power lamp or any dashboard display illuminated?"
  hint: "EFI needs ECU power first. If dashboard is completely dark, the ECU is not receiving 12 V."
  answers:
    → No dashboard power at all            [next: diag_battery_dead]     ← REFER TO BATTERY DIAGNOSIS
    → Dashboard is lit but CEL doesn't    [next: efi_cel_bulb_check]   ← POSSIBLE BULB FAILURE
    → Yes — full power to dash            [next: efi_pump_prime]        ← PROCEED TO PUMP PRIME TEST
```

### NEW: CEL Bulb/Circuit Check

```
efi_cel_bulb_check: (NEW)
  icon: 💡
  question: "Try to read any flash codes: turn key ON (don't start), listen for a click in the relay box, then look for flashing CEL."
  hint: "Some ECUs will flash a code even if the bulb appears dead. You might hear a relay clicking. This tests if the ECU is actually running self-diagnostics."
  answers:
    → Yes — I can see/hear flash codes     [next: efi_flash_codes]       ← ECU IS WORKING
    → No — completely silent              [next: diag_efi_pump_dead]    ← ECU NOT RESPONDING
```

### EXISTING: Pump Prime Check (Simplified)

```
efi_pump_prime: (EXISTING, SIMPLIFIED)
  icon: 👂
  question: "On key-ON (do not press start), do you hear the fuel pump prime for ~2 seconds?"
  hint: "A small electric hum from under the seat/tank for about 2 seconds, then silence."
  answers:
    → No pump sound at all                 [next: diag_efi_pump_dead]
    → Yes — pump primes                   [next: efi_cel_check]
```

### EXISTING: CEL Check (Unchanged)

```
efi_cel_check: (EXISTING)
  ✓ Is the CEL (check engine / fault lamp) lit or flashing?
    → Yes — CEL is lit/flashing           [next: efi_flash_codes]
    → No — no fault lamp                  [next: efi_no_cel_spark]
```

### EXISTING: Flash Codes & Spark (Unchanged)

```
efi_flash_codes: (EXISTING) — As currently defined
efi_no_cel_spark: (EXISTING) — As currently defined
```

---

## New Diagnosis Nodes

### `efi_cel_diagnostic` — NEW

```
efi_cel_diagnostic: (NEW DIAGNOSIS)
  type: diagnosis
  icon: 🔋
  severity: easy
  title: "CEL/Self-Test Responding — Proceed to Fault Codes"
  summary: "The ECU is powered and running self-diagnostics. Flash codes indicate specific sensor or component faults. Read the codes and follow the path to the relevant fault node."
  causes: [ "Any EFI system failure will trigger a code" ]
  guides: [
    { title: "EFI CEL Flash Codes — Manual Diagnostic Mode", url: "gy6-efi-cel-flash-codes.html" }
  ]
```

### `efi_power_check` — Already defined as part of the tree

(Node info above; diagnosis is routed to `diag_battery_dead` if needed.)

---

## Summary of Tree Changes

| **Node ID** | **Type** | **Status** | **Notes** |
|---|---|---|---|
| `carb_no_start_entry` | Question | NEW | Triage: is fuel smell present? |
| `carb_fuel_first` | Question | NEW | Manual fuel check before choke test |
| `efi_no_start_entry` | Question | NEW | Triage: is CEL lamp responding? |
| `efi_power_check` | Question | NEW | Is dashboard lit? (ECU power check) |
| `efi_cel_bulb_check` | Question | NEW | Can you hear/see flash codes? |
| `efi_cel_diagnostic` | Diagnosis | NEW | CEL is responding — read codes |
| `carb_choke_test` | Question | EXISTING | No change |
| `carb_spark_test` | Question | EXISTING | No change |
| `carb_fuel_check` | Question | EXISTING | No change |
| `carb_compression` | Question | EXISTING | No change |
| `efi_pump_prime` | Question | EXISTING | Simplified slightly |
| `efi_cel_check` | Question | EXISTING | No change |
| `efi_flash_codes` | Question | EXISTING | No change |
| All diagnosis nodes | Diagnosis | EXISTING | No changes — all routing updated |

---

## Routing Map: Cranks But Won't Fire

### Carburetor Path

```
cranks_fuel_type
  ↓
carb_no_start_entry (smell fuel?)
  ├→ Yes / Not sure → carb_choke_test → carb_spark_test → carb_fuel_check → carb_compression
  └→ No → carb_fuel_first (manual check)
      ├→ Now smells like fuel → carb_choke_test [continue above]
      └→ Still nothing → diag_no_fuel_supply
```

### EFI Path

```
cranks_fuel_type
  ↓
efi_no_start_entry (CEL responds?)
  ├→ Yes → efi_cel_diagnostic → efi_flash_codes → [various code nodes]
  ├→ No → efi_power_check (dashboard lit?)
  │   ├→ No dashboard → diag_battery_dead
  │   ├→ Dashboard OK but CEL dead → efi_cel_bulb_check
  │   │   ├→ Hear codes → efi_flash_codes
  │   │   └→ Silent → diag_efi_pump_dead
  │   └→ Full power → efi_pump_prime
  └→ Unsure → efi_pump_prime [continue to pump test]

efi_pump_prime (hear pump hum?)
  ├→ No → diag_efi_pump_dead
  └→ Yes → efi_cel_check → [rest of EFI path]
```

---

## Implementation Notes

1. **HTML changes**: Add 6 new question nodes + 1 new diagnosis node to the `TREE` object in `wizard.html`.
2. **No styling changes**: All new nodes use existing CSS classes.
3. **GA4 tracking**: New nodes will automatically log to GA4 via existing `gtag()` calls.
4. **Testing**: Validate each path end-to-end before deploy.

---

## Example User Journeys (New Paths)

### Journey 1: "Carb engine — cranks, no fuel smell"

```
root → no_start → cranks_fuel_type (Carb) → carb_no_start_entry (No smell)
  → carb_fuel_first (Confirmed no smell after manual test)
  → diag_no_fuel_supply ✓
```

### Journey 2: "EFI engine — cranks, no CEL response"

```
root → no_start → cranks_fuel_type (EFI) → efi_no_start_entry (No CEL)
  → efi_power_check (Dashboard lit) → efi_pump_prime (No pump sound)
  → diag_efi_pump_dead ✓
```

### Journey 3: "EFI engine — cranks, CEL flashes"

```
root → no_start → cranks_fuel_type (EFI) → efi_no_start_entry (Yes, CEL flashes)
  → efi_cel_diagnostic (Confirm it's working) → efi_flash_codes (Read code 22)
  → diag_code22_tps ✓
```

---

## Next Steps

1. Review and approve this structure
2. Implement all 6 new question nodes in `wizard.html`
3. Add the new diagnosis node `efi_cel_diagnostic`
4. Test each path in the browser
5. Update `sync-manifest.json` if applicable
6. Deploy to production

