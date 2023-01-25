package com.ssafy.learnway.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.learnway.domain.Interest;
import com.ssafy.learnway.domain.Language;
import com.ssafy.learnway.domain.user.User;
import lombok.*;

import java.time.LocalDate;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@ToString
public class UserSignupRequestDto {
    String userEmail;
    String userPwd;

    String name;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "Asia/Seoul")
    LocalDate birthDay;

    Language languageId;

    List<Interest>  interests;

    public User toEntity(){
        return User.builder()
                .userEmail(userEmail)
                .userPwd(userPwd)
                .roles(Collections.singletonList("ROLE_USER"))
                .name(name)
                .birthday(birthDay)
                .languageId(languageId)
                .build();
    }
}
