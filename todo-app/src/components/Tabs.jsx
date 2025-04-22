export function Tabs(props) {
    const tabs = ["All", "Open", "Completed"]
    const { selectedTab, setSelectedTab, todos } = props
    return (

        <nav className="tab-container">
            {   // tabs have the count for each. Below the tabs are mapped and the count is displayed as per the length of complete and incomplete tasks
                tabs.map((tab, tabIndex) => {
                    const numOfTasks = tab === "All" ?
                        todos.length :
                        tab === "Open" ?
                            todos.filter(val => !val.complete).length :
                            todos.filter(val => val.complete).length
                    return (
                        <button onClick={()=>{
                            setSelectedTab(tab)
                        }} 
                        key={tabIndex} className={"tab-button "+ (tab === selectedTab ? " tab-selected" : " ")}>
                            <h4 >{tab} <span>({numOfTasks})</span></h4>
                        </button>
                    )
                })
            }
        <hr />
        </nav>
        
    )
}