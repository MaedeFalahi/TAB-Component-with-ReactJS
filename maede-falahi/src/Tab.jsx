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
          className={`${styles.tabs} ${getActiveClass(1, styles.activeTabs)}`}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </li>
        <li
          className={`${styles.tabs} ${getActiveClass(2, styles.activeTabs)}`}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </li>
        <li
          className={`${styles.tabs} ${getActiveClass(3, styles.activeTabs)}`}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </li>
        <li
          className={`${styles.tabs} ${getActiveClass(4, styles.activeTabs)}`}
          onClick={() => toggleTab(4)}
        >
          Tab 4
        </li>
      </ul>
      <div className={styles.contentContainer}>
        <div className={toggleState === 1 ? `${getActiveClass(1, styles.activeContent )}`  : styles.content }>
          <h2>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </div>
        <div className={toggleState === 2 ? `${getActiveClass(2, styles.activeContent)}`  : styles.content }>
          <h2>Lorem2 ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </div>
        <div className={toggleState === 3 ? `${getActiveClass(3,  styles.activeContent)}` : styles.content }>
          <h2>Lorem3 ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </div>
        <div className={toggleState === 4 ? `${getActiveClass(4,  styles.activeContent)}` : styles.content }>
          <h2>Lorem4 ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default Tab;