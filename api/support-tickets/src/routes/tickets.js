import { create } from "../controller/create.js"
import { index } from "../controller/index.js"
import { update } from "../controller/update.js"
import { upadateStatus } from "../controller/updateStatus.js"
import { remove } from "../controller/remove.js"

import { parseRoutePath } from "../utils/parseRoutePath.js"


export const tickets = [
    {
        method: "POST",
        path: parseRoutePath("/tickets"),
        controller: create,
    },
    {
        method: "GET",
        path: parseRoutePath("/tickets"),
        controller: index,
    },
    {
        method: "PUT",
        path: parseRoutePath("/tickets/:id"),
        controller: update,
    },

    {
        method: "PATCH",
        path: parseRoutePath("/tickets/:id/close"),
        controller: upadateStatus,
    },
    {
        method: "DELETE",
        path: parseRoutePath("/tickets/:id"),
        controller: remove,
    },


]