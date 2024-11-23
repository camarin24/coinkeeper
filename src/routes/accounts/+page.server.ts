import { z } from "zod";
import type { Actions } from "./$types";
import { accounts } from "$lib/server/db/schema";
import { db } from "$lib/server/db";
import { fail } from "@sveltejs/kit";


export const actions = {
    default: async ({ request }) => {
        const schema = z.object({
            name: z.string().min(1),
            type: z.enum(accounts.type.enumValues),
            balance: z.coerce.number().finite().min(1)
        })
        const body = Object.fromEntries(await request.formData())
        const validationResult = await schema.spa(body)
        if (!validationResult.success) {
            return fail(400, validationResult.error.flatten())
        }
        await db.insert(accounts).values(validationResult.data)
        return { success: true };
    },

} satisfies Actions;