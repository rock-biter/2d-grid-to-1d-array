export default class Grid2DManager extends Array {
	constructor(cols, rows, size = 1) {
		super(cols * rows * size)

		this.cols = cols
		this.rows = rows
		this.size = Math.max(size, 1)
	}

	at(index, row) {
		this.get(index, row)
	}

	get(index, row) {
		let i = this.getIndex(index, row) * this.size

		const res = []

		for (let k = 0; k < this.size; k++) {
			res.push(this[i + k])
		}

		return res
	}

	set(data, index, row) {
		let i = this.getIndex(index, row)

		if (Array.isArray(data)) {
			const [x, y, z, w] = data

			this.setX(x, i)
			this.setY(y, i)
			this.setZ(z, i)
			this.setW(w, i)
			// ...
		} else {
			this[i] = data
		}
	}

	getX(index, row) {
		let i = this.getIndex(index, row)

		const [x] = this.get(i)
		return x
	}

	setX(x, index, row) {
		let i = this.getIndex(index, row) * this.size

		this[i] = x
	}

	getY(index, row) {
		let i = this.getIndex(index, row)

		const [, y] = this.get(i)
		return y
	}

	setY(y, index, row) {
		if (this.size < 2) return
		let i = this.getIndex(index, row) * this.size

		this[i + 1] = y
	}

	getZ(index, row) {
		let i = this.getIndex(index, row)

		const [, , z] = this.get(i)
		return z
	}

	setZ(z, index, row) {
		if (this.size < 3) return
		let i = this.getIndex(index, row) * this.size

		this[i + 2] = z
	}

	getW(index, row) {
		let i = this.getIndex(index, row)

		const [, , , w] = this.get(i)
		return w
	}

	setW(w, index, row) {
		if (this.size < 4) return
		let i = this.getIndex(index, row) * this.size

		this[i + 3] = w
	}

	get count() {
		return this.length / this.size
	}

	getIndex(index, row) {
		let i = index

		if (row && row >= 0) {
			const col = index
			i = this.getIndexFromCoords(col, row)
		}

		return i
	}

	getIndexFromCoords(x, y) {
		x = Math.floor(x)
		y = Math.floor(y)

		return x + y * this.cols
	}

	getCoordsFromVirtualIndex(index) {
		const x = index % this.cols
		const y = Math.floor(index / this.cols)

		return [x, y]
	}

	getCoordsFromRealIndex(index) {
		const i = Math.floor(index / this.size)

		return getCoordsFromVirtualIndex(i)
	}
}
