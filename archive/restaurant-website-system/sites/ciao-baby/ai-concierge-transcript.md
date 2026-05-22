# Ciao Baby! concierge test transcript

Date: 2026-05-04  
Test method: direct smoke tests against `answerConciergeQuestion()` in `lib/concierge-kb.ts`, which is the same resolver used by `app/api/concierge/route.ts`.

```
Q: What are the hours?
Topic: hours
A: Publicly listed hours from the legacy source are Tuesday through Thursday 11am–9pm, Friday 11am–10pm, Saturday 12pm–10pm, and closed Sunday/Monday. Public sources do not fully agree, so call Ciao Baby before promising today’s hours.
Actions: Call to confirm hours | Open public menu source
Safety: This concierge only uses verified Ciao Baby evidence from the local audit, public-source scrapes, and the captured 30-review packet. It hands off anything current, sensitive, or uncertain to a direct phone call.
---
Q: Do they take reservations?
Topic: unsupported request
A: I cannot verify that safely from the Ciao Baby evidence packet. I do not make reservations, hold tables, take orders, quote current prices or specials, answer allergy/medical questions, or promise private-party availability. Please call the restaurant for a human-confirmed answer.
Actions: Call Ciao Baby | Get directions
Safety: This concierge only uses verified Ciao Baby evidence from the local audit, public-source scrapes, and the captured 30-review packet. It hands off anything current, sensitive, or uncertain to a direct phone call.
---
Q: What dishes are mentioned?
Topic: menu highlights
A: Verified public menu/source notes include Ciao Baby! Sticks, stuffed artichoke, Aunt Dodie’s rolled stuffed eggplant, lamb chops Vesuvio, CiaoBaby! Burnt Pasta, chopped salads, and stuffed Melrose peppers. Customer review themes also mention homemade gnocchi, chicken parmesan, salted caramel gelato, and carrot cake. Availability and prices should be confirmed by phone.
Actions: View menu highlights | Call about availability
Safety: This concierge only uses verified Ciao Baby evidence from the local audit, public-source scrapes, and the captured 30-review packet. It hands off anything current, sensitive, or uncertain to a direct phone call.
---
Q: Can I book a private party?
Topic: private parties
A: The legacy current site mentions a private party room, and the 30-review packet includes a birthday-party review praising Nancy and Keira for accommodating a private room event. I cannot quote packages, capacity, deposits, or availability, so call the restaurant directly.
Actions: Call about parties | Open directions
Safety: This concierge only uses verified Ciao Baby evidence from the local audit, public-source scrapes, and the captured 30-review packet. It hands off anything current, sensitive, or uncertain to a direct phone call.
---
Q: Do you have gluten-free pasta prices?
Topic: unsupported request
A: I cannot verify that safely from the Ciao Baby evidence packet. I do not make reservations, hold tables, take orders, quote current prices or specials, answer allergy/medical questions, or promise private-party availability. Please call the restaurant for a human-confirmed answer.
Actions: Call Ciao Baby | Get directions
Safety: This concierge only uses verified Ciao Baby evidence from the local audit, public-source scrapes, and the captured 30-review packet. It hands off anything current, sensitive, or uncertain to a direct phone call.
---
```
