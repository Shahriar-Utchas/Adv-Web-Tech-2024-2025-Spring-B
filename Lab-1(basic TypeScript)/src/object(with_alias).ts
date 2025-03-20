// type alias
type Employee = {
    readonly id : number,
    name: string,
    status?: boolean
    retire : (date : Date) => void
}

let employee1: Employee =
{
    id: 1,
    name: "shahriar",
    retire: function(date: Date) {
        console.log("Retired on " + date);
    }
};
// employee.id = 0; // Error: Cannot assign to 'id' because it is a read-only property.
employee1.status = true;

let employee2: Employee = {
    id: 2,
    name: "utchas",
    status: true,
    retire: function(date: Date) {
        console.log("Retired on " + date);
    }
};
