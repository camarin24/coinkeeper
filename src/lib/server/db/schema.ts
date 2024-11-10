import { sql } from "drizzle-orm";
import { integer, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey(),
	age: integer('age')
});

export const accounts = sqliteTable('accounts', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	type: text('type', { enum: ['Bank', 'Cash', 'Credit', 'Investment', 'Other'] }).notNull(),
	balance: real('balance').default(0),
	createdAt: text('createdAt').default(sql`(CURRENT_TIMESTAMP)`),
})

export const transactions = sqliteTable('transactions', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	accountId: integer('accountId').references(() => accounts.id).notNull(),
	type: text('type', { enum: ["Income", "Expense", "Transfer"] }).notNull(),
	amount: real('amount').notNull(),
	description: text('description'),
	date: text('date').default(sql`(CURRENT_TIMESTAMP)`),
	createdAt: text('createdAt').default(sql`(CURRENT_TIMESTAMP)`),
})