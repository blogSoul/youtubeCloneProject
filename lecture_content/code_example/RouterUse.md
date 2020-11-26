express.Router() Object도 use를 사용할 수 있습니다.  

```javascrpit
import express from "express";
import { documentation } from "../controllers/apicontroller";
import v1Router from "../routes/api/v1Router";
import v2Router from "../routes/api/v2Router";
const apiRouter = express.Router();

apiRouter.use("/v1", v1Router);
apiRouter.use("/v2", v2Router);
apiRouter.get("/documentation", documentation);

export default apiRouter;
```