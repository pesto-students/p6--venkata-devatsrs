// Find if Path Exists in Graph
 
const setGraph = (edges) => {


    // const graph = Array.from({length: edges.length}, () => new Array());
    const graph = Array.apply(null, Array(edges.length)).map(function () {return []}) ;
    
    for (let i = 0; i < edges.length; i++) {
        for (let j = 0; j < edges[i].length; j++) {
            graph[i].push(edges[i][j]);
        }
    }

    return graph;
    
}

const validPath = function (n, edges, source, destination) {

    let graph = setGraph(edges);

    console.log({graph});

    let visited = new Set();

      const dfs = (source) => {
        const curNode = source[source.length - 1];

        if (curNode == destination) {
            return true;
        }
        console.log(graph[curNode]);
        for (const v of graph[curNode]) {
            if (!visited.has(v)) {
                visited.add(v);
                source.push(v);
                if (dfs(source)) {
                    return true;
                }
                source.pop();
            }
        }
        return false;
    };

    console.log(visited);
    return dfs([source]);

};

console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2));
console.log(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5));