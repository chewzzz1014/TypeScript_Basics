// basic class declaration
class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y)
    }
}

let p1 = new Point(0, 10)
let p2 = new Point(10, 20)
let p3 = p1.add(p2)


// inheritance
class Point3D extends Point {
    z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y)
        this.z = z
    }
    add(point: Point3D) {
        let point2D = super.add(point)
        return new Point3D(point2D.x, point2D.y, this.z + point.z)
    }
}


// static property
class Something {
    static instances = 0;
    constructor() {
        Something.instances++
    }
}
let s1 = new Something()
let s2 = new Something()
console.log(Something.instances) // 2


// access modifier: public (default), private, protected
// public: can be accessed inside class, class children, class instances
// protected: can be accessed inside class and by class children only
// private: can be accessed inside class only
class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}
let foo = new FooBase()
foo.x // ok
// foo.y => error! it's private 
// foo.z => error! it's protected (accesible inside class and child class only)

class FooChild extends FooBase {
    constructor() {
        super()
        this.x; // ok
        this.z // ok, FooChild is FooBase' child class
        // this.y => error! 
    }
}