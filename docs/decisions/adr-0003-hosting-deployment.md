## ADR-0003 - Decide on what to use for deployments

### Context

The site will need to be deployed and hosted somewhere, and we need to factor in cost + future maintainability.
The main options that are being considered are:
- Vercel 
- Heroku 
- GitHub Codespace

See Additional Information for the breakdown

### Decision

Vercel to be used for Phase 1 and this to be revisited afterwards

### Status

PROPOSED

### Consequences

The expected usage is still a big question and will likely be the deciding factor

### Additional Information

## Vercel
The current primary candidate due to it's ties with NextJS and Github integration. It is also made primarily to serve static content or serverless applications, which fits our project needs. They have three tiers Hobby, Pro & Enterprise (bespoke rates & limits). Hobby tier does not support autoscaling, but Pro does (pay extra in the case of exceeding the caps $40 / additional 100GB past the 1TB).

We don't know the expected usage currently, but it seems like we will be fine with the **free Hobby tier** for at least Phase 1 & 2.

| Feature                | Hobby | Pro  |
| :--------------------- | :---: | :--: |
| Cost (/user /month)    | $0    | $20  |
| Deployments /day       | 100   | 6000 |
| Team members(*1)       | 0     | 10   |
| Concurrent builds (*2) | 1     | 12   |
| Disk size (GB)         | 13    | 13   |
| Bandwidth (monthly)    | 100GB | 1TB  |
| Build execution hrs    | 100   | 400  |
| Autoscaling            | No    | Yes  |

_*1: Team members will have access to view and manage vercel deployments on the vercel dashboard. This is not expected to be a requirement since by default prod builds are triggered via code changes to 'main' and deployment specific configs (if necessary) are managed via code. It might still be useful for viewing specific error details in the case of build failure._

_*2: Branch builds count towards this concurrency cap_

https://vercel.com/docs/concepts/payments-and-billing/overview

## Heroku
Pricing model based on 'Dyno' - a container for an instance of the application. Pricing is per 'dyno' i.e, if I have 1 Standard 1X dyno for preprod and 2 Standard 2X for prod, then I will be charged according to the dyno hours used by each type by their rates. For Japan Prayer Guide phase 1, we will likely want 2 dynos for prod and 1 for pre-prod. Note that the Eco tier behaves differently and is a flat rate for total dyno hours across all eco dynos.

We don't know the expected usage currently, but we would likely be use **3x Basic dyno** for at least Phase 1 & 2.

| Feature                       | Eco    | Basic  | Standard 1X | Standard 2X |
| :---------------------------- | :----: | :----: | :---------: | :---------: |
| Cost /dyno/hr, cap /dyno (*1) | na, $5 | 1c, $7 | 3c, $25     | 6c, $50     |
| Container RAM                 | 512MB  | 512MB  | 512MB       | 1GB         |
| 'Always on' supported         | No     | Yes    | Yes         | Yes         |
| Horizontal scaling (*2)       | No     | No     | Yes         | Yes         |
| Team members (*3)             | 5      | 5      | 5           | 5           |

_*1: Heroku pricing details are deliberately confusing and complicated. Eco tier, Basic tier, and the different Standard tiers cannot be mixed together per app - your app can have 1 standard 1X dyno and 1 standard 2X dyno, but you can't have 1 Eco dyno and 1 Basic dyno, or 1 Eco and 1 Standard dyno together. Eco tier is priced at a flat fee for 1000 dyno hours total across any number of eco dynos, but all other tiers are priced per dyno, per hour. E.g, if I had 2 basic dynos and cumulatively used 100 dyno hrs in a month, I would be charged $1 total. The cap is the price charged if the dyno was in use 24/7 for the whole month._

_*2: None of the cheapest 4 Heroku pricing tiers support autoscaling, but the standard tiers support horizontal scaling - you can increase the number of dynos (manually, unlike autoscaling). The cost would be the same as if you added an additional (or more) dyno of the same tier._

_*3: Heroku charges $10 / month for teams larger than 5 (cap of 25 per team)_

https://www.heroku.com/pricing

## GitHub Codespace
Github Codespaces are price-rated by core hours (price for 1 core of 1 hours time in processing) and GB-month (price for 1 GB to be stored for 1 month). Free & Pro personal accounts start of with some number of storage & core hours per month free for public repos. Organization / Enterprise accounts do not get this bonus.

| Tier | Core Hrs (/month) | Storage (GB-month) |
| :--- | :---------------: | :----------------: |
| Free | 120               | 15                 |
| Pro  | 180               | 20                 |

Additional core hours are charged at a rate of 9c per core hour. (e.g, a 4 core instance running for 2 hrs is (4x 2x 9c = 72c))
Additional storage is charged 7c per GB-month. 

https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-storage-usage
