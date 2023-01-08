// All Paths From Source to Target

const setGraph = (edges) => {


    // const graph = Array.from({length: edges.length}, () => new Array());
    const graph = Array.apply(null, Array(edges.length)).map(function () {return []}) 
    
    for (let i = 0; i < edges.length; i++) {
        for (let j = 0; j < edges[i].length; j++) {
            graph[i].push(edges[i][j]);
        }
    }

    return graph;
    
}

const allPathsSourceTarget = function(graph) {

    const allPaths = [];

    
    const dfs = (source) => {
        const curNode = source[source.length - 1];
        

        if (curNode == graph.length - 1) {
            allPaths.push([...source]);
            return;
        }
        for (const v of graph[curNode]) {
            source.push(v);
            dfs(source);
            source.pop();
        }
    };

    dfs([0]);
    return allPaths;


    
};

const graph1 = setGraph([[1,2],[3],[3],[]]);
console.log(allPathsSourceTarget(graph1));

const graph2 = setGraph([[4,3,1],[3,2,4],[3],[4],[]]);
console.log(allPathsSourceTarget(graph2));

