interface IEmployee<T, V> {
    name: string;
    data: T;
    meta: V
}

const userOla: IEmployee<{meta: string}, {james: string}> =  {
    name: "ola",
    data: {
       meta: "foo"
    },
    meta: {
        james: "james"
    }
}

const user332: IEmployee<string[], string[]>= {
    name: "john",
    data: ["jamews", "ola"],
    meta: ["school"]
}