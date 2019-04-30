export const getOneItem = model => async (req, res) => {
  try {
    const doc = await model
      .findOne({ _id: req.params.id })
      .lean()
      .exec()

    if (!doc) {
      return res.status(400).end()
    }

    res.status(200).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const getAllItems = model => async (req, res) => {
  try {
    const docs = await model
      .find()
      .lean()
      .exec()

    res.status(200).json({ data: docs })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const createOneItem = model => async (req, res) => {
  try {
    const doc = await model.create(req.body)
    res.status(201).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const updateOneItem = model => async (req, res) => {
  try {
    const item = await model
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .lean()
      .exec()

    if (!item) {
      return res.status(400).end()
    }

    res.status(200).json({ data: item })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const removeOneItem = model => async (req, res) => {
  try {
    const removed = await model.findOneAndRemove({
      _id: req.params.id
    })

    if (!removed) {
      return res.status(400).end()
    }

    return res.status(200).json({ data: removed })
  } catch (e) {
    console.log(doc)
    console.error(e)
    res.status(400).end()
  }
}

export const crudControllers = model => ({
  getAllItems: getAllItems(model),
  getOneItem: getOneItem(model),
  createOneItem: createOneItem(model),
  updateOneItem: updateOneItem(model),
  removeOneItem: removeOneItem(model)
})
