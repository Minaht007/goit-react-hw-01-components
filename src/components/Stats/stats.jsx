import titleStyle from './stats.module.css'

export default function Stats({ title, stats }) {
  return (
    <section className="statistics">
     {title && <h2 className={titleStyle.title} >{title}</h2>} 

      <ul className={titleStyle.statList}>
   
        {stats.map(({id, label, percentage}) => {
          return (
            <li key={id} className={titleStyle.item}>
              <span className={titleStyle.label}>{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
