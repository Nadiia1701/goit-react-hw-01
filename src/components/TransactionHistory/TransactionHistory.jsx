import css from "./TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.tableThread}>
                <tr>
                    <th className={css.tableThreadText}>Type</th>
                    <th className={css.tableThreadText}>Amount</th>
                    <th className={css.tableThreadText}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.tableBody}>
                {items.map((item) => {return <tr className={css.bodyTd} key={item.id}>
                    <td className={css.tableThreadVal}>{item.type}</td>
                    <td className={css.tableThreadVal}>{item.amount}</td>
                    <td className={css.tableThreadVal}>{item.currency}</td>
                </tr>})}
            </tbody>
        </table>
    );
}