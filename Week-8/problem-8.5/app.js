// Find the Town Judge

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


const findJudge = function (n, trust) {

 
    let graph = setGraph(trust);

    let trusted = new Set();

    let trustedBy = new Set();

    //console.log(graph);
    for (let [p1, p2] of graph) {

        //console.log(p1, p2);

        trusted.add(p2);

        trustedBy.add(p1);

    }

    //console.log(trusted,trustedBy);

    for (let i of trusted) {

        if (!trustedBy.has(i)) {

            return i;

        }

    }

    return -1;


};

console.log(findJudge(2, [[1, 2]]));
console.log(findJudge(3, [[1, 3], [2, 3]]));
console.log(findJudge(3, [[1,3],[2,3],[3,1]]));
console.log(findJudge(3, [[1,2],[2,3]]));

