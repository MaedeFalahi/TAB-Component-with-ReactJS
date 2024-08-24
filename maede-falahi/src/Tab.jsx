import React , {useState , useEffect} from 'react';
import styles from "./Tab.module.css";

function Tab() {

    const items = localStorage.getItem('items');
    const [toggleState, setToggleState] = useState(JSON.parse(items));

    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(toggleState));
    }, [toggleState]);

    console.log(items)

    const toggleTab = (index ) => {
      setToggleState(index);
    };
   
    
    const getActiveClass = (index, className) =>
      toggleState === index ? className : "";

  return (
    <>  
         <div className={styles.container}>
      <ul className={styles.tabList}>
        <li
          className={`styles.tabs ${getActiveClass(1, styles.activeTabs)}`}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </li>
        <li
          className={`styles.tabs ${getActiveClass(2, styles.activeTabs)}`}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </li>
        <li
          className={`styles.tabs ${getActiveClass(3, styles.activeTabs)}`}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </li>
      </ul>
      <div className={styles.contentContainer}>
        <div className={toggleState === 1 ? `${getActiveClass(1, styles.activeContent )}`  : styles.content }>
          <h2>Lorem</h2>
        </div>
        <div className={toggleState === 2 ? `${getActiveClass(2, styles.activeContent)}`  : styles.content }>
          <h2>Ipsum</h2>
        </div>
        <div className={toggleState === 3 ? `${getActiveClass(3,  styles.activeContent)}` : styles.content }>
          <h2>Dolor</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tab;