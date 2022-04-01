#

def equalizeArray(arr)
    # Write your code here
    obj = {}
    arr.each do |i| 
        if obj.include?i
            obj[i]+=1
        else
            obj[i] = 1
        end
    end
    puts obj
    max_value = 0
    arr.each{|i| max_value = obj[i] if obj[i] >max_value}
    return arr.length-max_value
end
