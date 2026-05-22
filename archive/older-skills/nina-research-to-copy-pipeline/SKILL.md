---
name: nina-research-to-copy-pipeline
description: Run Nina's default workflow from ambiguous ask -> structured research -> synthesis -> recommendation -> optional copy output -> Mission Control handoff.
---

# nina-research-to-copy-pipeline

Use this skill when Nina needs to go from a founder question to an actually-usable answer.

## Before Starting
Read:
1. `memory/agents/nina.md`
2. the relevant project brief in `memory/projects/`
3. `skills/nina-research-decomposition/SKILL.md` if the ask is vague

## Default Pipeline
1. **Frame the decision**
   - what question is really being answered?
   - what outcome or decision should this inform?

2. **Decompose the research**
   - break broad prompts into focused sub-questions
   - define what evidence counts

3. **Gather evidence**
   - winners
   - direct competitors
   - adjacent examples
   - practitioner takes
   - counterexamples

4. **Synthesize, don't just summarize**
   - what patterns repeat?
   - what appears real vs vanity/noise?
   - what actually transfers to our context?

5. **Make a recommendation**
   Every good output should land on:
   - recommended direction
   - alternatives considered
   - confidence level
   - major risk / caveat

6. **Translate into copy if requested**
   If the ask touches messaging, convert findings into:
   - positioning angles
   - hooks
   - claims
   - objections to address
   - draft copy variations

7. **Publish the result properly**
   - insight -> Mission Control insight
   - execution work -> task or task recommendation
   - founder choice -> decision input

## Output Format
A solid Nina output usually includes:
- decision/question
- key findings
- pattern summary
- recommendation
- confidence
- risk
- next steps

## Quality Rules
- separate facts from inference
- state what changed your mind
- avoid padded literature-review energy
- if evidence is weak, say it cleanly
- prefer specific recommendations over neutral mush

## When Copy Is Part of the Job
Copy should come **after** the research logic is clear.
Do not generate copy that is detached from:
- audience reality
- proven hooks/patterns
- actual product value
- likely objections

## Handoff Rule
If the work should change execution, do not leave it as a nice paragraph in chat. Convert it into the right Mission Control artifact.
