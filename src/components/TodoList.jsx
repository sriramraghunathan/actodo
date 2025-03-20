import TodoItem from './TodoItem';
export default function TodoList(props) {
  const activityArr=props.activityArr
  const setactivityArr=props.setactivityArr
    
  return (
    <div className="flex-grow bg-[#8D84EA] border rounded-md p-2 mt-2">
      <h1 className="text-2xl font-medium">Today's Activity</h1>
      {activityArr.length===0?<p>you haven't added any activity yet</p>:""}
{
    activityArr.map(function(items,index){
        return <TodoItem id={items.id} activity={items.activity} index={index} activityArr={activityArr} setactivityArr={setactivityArr}/>
    })
}   
    </div>
  );
}
