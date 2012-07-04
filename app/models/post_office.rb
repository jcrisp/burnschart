class PostOffice < ActionMailer::Base


  def burns_information(patient_name, link)

    content_type "text/html" 

    @recipients         = 'james@crispdesign.net'
    @from               = 'BurnsChart <no_reply@burnschart.com>'
    @subject            = 'BurnsChart for: ' + patient_name
    @body["link"]       = link

  end

end

