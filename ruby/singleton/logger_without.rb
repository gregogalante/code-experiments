class LoggerWithout

  def initialize
    @log = File.open('log.txt', 'a')
  end

  @@instance = Logger.new

  def self.instance
    @@instance
  end

  def log(msg)
    @log.puts(msg)
  end

  private_class_method :new # new is private so it's not possible to create new objects.
end