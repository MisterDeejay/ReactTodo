json.array! @todos do |r|
  json.merge! r.attributes

  debugger
  if r.steps
    json.array! r.steps do |s|
      s.merge! s.attributes
    end
  end
end
