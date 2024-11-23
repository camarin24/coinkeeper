import { db } from "$lib/server/db";
import { accounts } from "$lib/server/db/schema";
import type { LayoutServerLoad } from "./$types";


export const load: LayoutServerLoad = async () => {
    return {
        types: Array.from(accounts.type.enumValues),
        accounts: await db.query.accounts.findMany({
            with: {
                transactions: true
            }
        })
    };
};

