class LinkSerializer < ActiveModel::Serializer
  attributes :id, :stepId, :title, :description, :url

  def stepId
    object.step_id
  end

end
