class StepSerializer < ActiveModel::Serializer
  attributes :id, :urlId, :nextUrl, :title, :subtitle, :description, :diagram

  def urlId
    object.url_id
  end

  def nextUrl
    object.next_url
  end
end
