import { router } from "../router-procedures";

import { addressRouter } from "./address.router";
import { chainRouter } from "./chain.router";
import { dashboardRouter } from "./dashboard.router";
import { healthRouter } from "./health.router";
import { searchRouter } from "./search.router";
import { transactionRouter } from "./transaction.router";
import { userRouter } from "./user.router";

export const appRouter = router({
  health: healthRouter,
  user: userRouter,
  dashboard: dashboardRouter,
  chains: chainRouter,
  transaction: transactionRouter,
  search: searchRouter,
  address: addressRouter,
});

export type AppRouter = typeof appRouter;
