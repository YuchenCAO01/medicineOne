package Medione.pojo;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
/**
 * @ClassName Note
 * @Description simple java class for note
 **/
@Data
@TableName("Note")
public class Note{
    private String note;
}
